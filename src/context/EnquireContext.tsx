'use client';

import React, { createContext, useContext, useState } from 'react';
import EnquireModal from '@/components/ui/EnquireModal';

interface EnquireContextType {
  openEnquire: (title?: string, defaultProjectName?: string) => void;
  closeEnquire: () => void;
}

const EnquireContext = createContext<EnquireContextType | undefined>(undefined);

export function EnquireProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('ENQUIRE NOW');
  const [projectName, setProjectName] = useState('');

  const openEnquire = (title = 'ENQUIRE NOW', defaultProjectName = '') => {
    setModalTitle(title);
    setProjectName(defaultProjectName);
    setIsOpen(true);
  };

  const closeEnquire = () => {
    setIsOpen(false);
  };

  return (
    <EnquireContext.Provider value={{ openEnquire, closeEnquire }}>
      {children}
      <EnquireModal 
        isOpen={isOpen} 
        onClose={closeEnquire} 
        title={modalTitle} 
        defaultProjectName={projectName}
      />
    </EnquireContext.Provider>
  );
}

export function useEnquire() {
  const context = useContext(EnquireContext);
  if (!context) {
    throw new Error('useEnquire must be used within an EnquireProvider');
  }
  return context;
}
