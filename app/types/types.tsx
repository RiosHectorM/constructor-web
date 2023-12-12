export interface UserMenuProps {
  currentUser:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
        page?: string;
      }
    | undefined;
}
