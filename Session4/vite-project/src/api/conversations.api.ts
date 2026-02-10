// get Cars

import type { Conversation } from "../types/conversation.types";
import axiosClient from "./axiosClient";

export async function getConversations(): Promise<Conversation[]> {
  const response = await axiosClient.get('/conversations');

  return response.data;
}


// create Car


// update Car



// delete Car