import { createContext } from 'react';
import type { Content } from '../types';
import { en } from './en';

export const ContentContext = createContext<Content>(en);
