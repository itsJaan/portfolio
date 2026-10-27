import { useContext } from 'react';
import { ContentContext } from './context';

export const useContent = () => useContext(ContentContext);
