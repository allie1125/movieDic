import { createPortal } from 'react-dom';

interface Props {
  openModal: boolean;
  children: any;
}

const Portal = ({ openModal, children }: Props) => {
  if (!openModal) return null;

  return createPortal(<div style={{ display: 'flex', justifyContent: 'center' }}>{children}</div>, document.body);
};

export default Portal;
