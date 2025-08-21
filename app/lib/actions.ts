'use server';

import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Event } from '../types/Event';
import { Question } from '../types/Question';
import api from './api';

export async function createEvent(formData: FormData) {
  const sessionId = uuidv4();

  try {
    const res = await api.post<Event>(
      '/sessions',
      {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
      },
      {
        params: { sessionId },
      },
    );

    console.log('API response:', res.status, res.data);
  } catch (error) {
    throw new Error(`Error creating new session: ${error}`);
  }

  return redirect(`/sessions/${sessionId}`);
}

export async function getAllEvents() {
  try {
    const res = await api.get<Event[]>('/sessions');
    return res.data;
  } catch (error) {
    throw new Error(`Error finding events: ${error}`);
  }
}

export async function getEventById(id: string) {
  try {
    const res = await api.get<Event>(`/sessions/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(`Error finding event: ${error}`);
  }
}

// QUESTIONS

export async function createQuestion(formData: FormData): Promise<void> {
  const question = formData.get('question') as string;
  const sessionId = formData.get('sessionId') as string;

  try {
    await api.post('/questions', { question }, { params: { sessionId } });

    console.log('Question created for session', sessionId);
  } catch (error) {
    console.error('Error creating question', error);
    throw new Error('Error creating new question');
  }
}

export async function getQuestionsByEvent(sessionId: string) {
  try {
    const res = await api.get<Question[]>('/questions', {
      params: { sessionId },
    });
    return res.data;
  } catch (error) {
    throw new Error(`Error finding questions: ${error}`);
  }
}

export async function updateQuestion(id: string, formData: FormData) {
  const numLikes = formData.get('numLikes') as string;

  try {
    await api.patch<Question>(`/questions/${id}`, {
      numLikes: Number(numLikes),
    });
  } catch (error) {
    throw new Error(`Error liking the question: ${error}`);
  }
}
