'use client';

import React, { createContext, useContext, useState } from 'react';
import EnquireModal from '@/components/ui/EnquireModal';

interface EnquireContextType {
  openEnquire: (title?: string, defaultProjectName?: string) => void;
  openServiceEnquire: (serviceName: string) => void;
  closeEnquire: () => void;
}

const EnquireContext = createContext<EnquireContextType | undefined>(undefined);

export function EnquireProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Welcome to Pivora Estates');
  const [projectName, setProjectName] = useState('');
  const [serviceName, setServiceName] = useState('');

  const openEnquire = (title = 'Welcome to Pivora Estates', defaultProjectName = '') => {
    setModalTitle(title);
    setProjectName(defaultProjectName);
    setServiceName('');
    setIsOpen(true);
  };

  const openServiceEnquire = (selectedServiceName: string) => {
    setModalTitle(`Consultation Request - ${selectedServiceName}`);
    setProjectName('');
    setServiceName(selectedServiceName);
    setIsOpen(true);
  };

  const closeEnquire = () => {
    setIsOpen(false);
  };

  return (
    <EnquireContext.Provider value={{ openEnquire, openServiceEnquire, closeEnquire }}>
      {children}
      <EnquireModal
        isOpen={isOpen}
        onClose={closeEnquire}
        title={modalTitle}
        defaultProjectName={projectName}
        serviceName={serviceName}
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
