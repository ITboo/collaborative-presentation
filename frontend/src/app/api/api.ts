import { presentations } from "../store/store";
import { Presentation } from "../types";

export const createPresentation = async (title: string) => {
      const newPresentation: Presentation = {
        id: '222',
        title,
        createdBy: 'fffff',
        createdAt: new Date().toISOString()
    }
    presentation
  };