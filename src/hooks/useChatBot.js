import { useState } from "react";

const initialMessages = [
	{
		role: "assistant",
		content:
			"Hi, I’m Sarath’s AI assistant. Ask me about his experience, projects, or technical skills.",
	},
];

const getReply = (data) =>
	data.message || data.output_text || data.choices?.[0]?.message?.content;

const useChatBot = () => {
	const [messages, setMessages] = useState(initialMessages);
	const [isSending, setIsSending] = useState(false);
	const endpoint = process.env.REACT_APP_AI_ASSIST_API_URL;

	const sendMessage = async (content) => {
		const nextMessages = [...messages, { content, role: "user" }];
		setMessages(nextMessages);
		setIsSending(true);
		try {
			if (!endpoint) {
				throw new Error("AI Assist endpoint is not configured");
			}

			const response = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// skip the hard-coded greeting; the server has its own system prompt
				body: JSON.stringify({ messages: nextMessages.slice(1) }),
			});

			if (!response.ok) {
				throw new Error("AI Assist request failed");
			}

			const reply = getReply(await response.json());
			if (!reply) {
				throw new Error("AI Assist response was empty");
			}

			setMessages((current) => [
				...current,
				{ role: "assistant", content: reply },
			]);
		} catch (error) {
			setMessages((current) => [
				...current,
				{
					role: "assistant",
					content: "AI Assist is not connected yet. Please try again later.",
				},
			]);
		} finally {
			setIsSending(false);
		}
	};

	return { messages, sendMessage, isSending };
};

export default useChatBot;
