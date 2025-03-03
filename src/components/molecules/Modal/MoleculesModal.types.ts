export interface IMoleculesModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  loading?: any;
  error?: any;
  textSave?: string;
  onSave: () => void;
  onCancel: () => void;
}
