'use server';

import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Event } from './types/Event';
import { Question } from './types/Question';

export async function createEvent(formData: FormData) {
  const newEvent: Event = {
    sessionId: uuidv4(),
    title: formData.get('title') as string,
    description: formData.get('description') as string,
  };

  console.log(newEvent);
  redirect(`/events/${newEvent.sessionId}`);
}

export async function getEventById(id: string) {
  console.log(id);
  const dummyEvent = {
    title: 'dummytitle',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores incidunt reiciendis quidem excepturi explicabo. Rerum perferendis qui pariatur nisi ipsam, dicta vero? Itaque perspiciatis neque delectus sint doloremque veritatis. Recusandae ipsam delectus quod tempore eum accusamus placeat totam ullam quia.',
  };
  return dummyEvent;
}

export async function getQuestionsById(id: string) {
  const dummyQuestion: Question = {
    sessionId: id,
    question: 'what is reality?',
    numLikes: 200,
    isAnswered: false,
    createdAt: new Date().toLocaleDateString(),
  };

  return [
    { ...dummyQuestion, id: '1' },
    { ...dummyQuestion, id: '2' },
    { ...dummyQuestion, id: '3' },
    { ...dummyQuestion, id: '4' },
    { ...dummyQuestion, id: '5' },
    { ...dummyQuestion, id: '6' },
  ];
}

export async function likeQuestion(formData: FormData) {
  // send to backend
  // save in local storage
  console.log(formData.get('id'));
}

export async function postQuestion(formData: FormData) {
  const question = {
    sessionId: formData.get('id'),
    question: formData.get('question'),
  };

  console.log(question);
}
