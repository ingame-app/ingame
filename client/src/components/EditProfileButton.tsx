import styled from 'styled-components';
import edit from '../assets/images/edit.png';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useState } from 'react';
import ProfileModal from './modals/ProfileModal';

interface EditProfileButtonProps {
  isOpen?: boolean;
}

const EditProfileButton = ({ isOpen = false }: EditProfileButtonProps) => {
  const [open, setOpen] = useState(isOpen);
  const editProfileModalRef = useOutsideClick<HTMLDivElement>(open, () => setOpen(false));
  return (
    <EditProfileButtonStyle $open={open} ref={editProfileModalRef}>
      <button onClick={() => setOpen(!open)}>
        <img src={edit} alt="edit" />
      </button>
      {open && <ProfileModal />}
    </EditProfileButtonStyle>
  );
};

const EditProfileButtonStyle = styled.div<{ $open: boolean }>`
  padding-top: 0.2rem;
`;

export default EditProfileButton;