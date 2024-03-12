import Modal from './modal';
import NavItem from './nav-item';
import Button from './button';

export interface MobileNavProps {
  onCloseModal: () => void;
}
const navItems = ['About', 'Services', 'Career', 'Gallery', 'Contacts'];

export default function MobileNav({ onCloseModal }: MobileNavProps) {
  return (
    <Modal>
      <div className="text-right">
        <Button onClick={onCloseModal}>CLOSE</Button>
      </div>
      <nav className="pt-[110px]">
        <ul className="flex flex-col gap-12 items-center">
          {navItems.map((item, i) => (
            <NavItem
              key={i}
              pathName={item.toLowerCase()}
              onClick={onCloseModal}
            >
              <div className="text-lg tracking-widest leading-tight">
                {item}
              </div>
            </NavItem>
          ))}
        </ul>
      </nav>
    </Modal>
  );
}
