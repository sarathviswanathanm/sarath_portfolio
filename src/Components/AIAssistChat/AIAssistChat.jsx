import React, { useContext, useEffect, useRef, useState } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { trackEvent } from "../../analytics";
import StyleContext from "../../Context/StyleContext";
import "./AIAssistChat.css";
import Markdown from "react-markdown";
import useChatBot from "../../hooks/useChatBot";

const AIAssistChat = () => {
	const { isDark } = useContext(StyleContext);
	const [isOpen, setIsOpen] = useState(false);
	// const [messages, setMessages] = useState(initialMessages);
	const [draft, setDraft] = useState("");
	const inputRef = useRef(null);
	const messagesRef = useRef(null);
	const { messages, sendMessage, isSending } = useChatBot();

	useEffect(() => {
		if (isOpen) {
			inputRef.current?.focus();
		}
	}, [isOpen]);

	useEffect(() => {
		messagesRef.current?.scrollTo({
			top: messagesRef.current.scrollHeight,
			behavior: "smooth",
		});
	}, [messages, isSending]);

	const toggleChat = () => {
		setIsOpen((current) => {
			trackEvent("Engagement", "ai_assist_toggle", current ? "close" : "open");
			return !current;
		});
	};

	const handleSend = () => {
		const content = draft.trim();
		if (!content || isSending) return;
		sendMessage(content);
		setDraft("");
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			handleSend();
		}
	};

	return (
		<div className={`ai-assist ${isDark ? "ai-assist-dark" : ""}`}>
			{isOpen && (
				<section className="ai-chat-panel" aria-label="AI Assist chat">
					<header className="ai-chat-header">
						<div>
							<p className="ai-chat-eyebrow">AI ASSIST</p>
							<h2>Ask about Sarath</h2>
						</div>
						<button
							type="button"
							className="ai-close-button"
							onClick={toggleChat}
							aria-label="Close AI Assist"
						>
							<FiX />
						</button>
					</header>

					<div
						className="ai-chat-messages"
						ref={messagesRef}
						aria-live="polite"
					>
						{messages.map((message, index) => (
							<div
								className={`ai-message ai-message-${message.role}`}
								key={`${message.role}-${index}`}
							>
								<Markdown>{message.content}</Markdown>
							</div>
						))}
						{isSending && (
							<p className="ai-message ai-message-assistant">Thinking…</p>
						)}
					</div>

					<div className="ai-chat-composer">
						<textarea
							ref={inputRef}
							value={draft}
							onChange={(event) => setDraft(event.target.value)}
							onKeyDown={handleKeyDown}
							placeholder="Ask a question…"
							aria-label="Message AI Assist"
							rows="1"
						/>
						<button
							type="button"
							onClick={handleSend}
							disabled={!draft.trim() || isSending}
							aria-label="Send message"
						>
							<FiSend />
						</button>
					</div>
				</section>
			)}

			<button
				type="button"
				className={`ai-launcher ${isOpen ? "ai-launcher-open" : ""}`}
				onClick={toggleChat}
				aria-label={isOpen ? "Close AI Assist" : "Open AI Assist chat"}
				aria-expanded={isOpen}
				title={isOpen ? "Close AI Assist" : "Chat with my AI assistant"}
			>
				{isOpen ? (
					<FiX />
				) : (
					<>
						<HiSparkles className="ai-launcher-icon" aria-hidden="true" />
						<span className="ai-launcher-label">Ask AI</span>
					</>
				)}
			</button>
		</div>
	);
};

export default AIAssistChat;
