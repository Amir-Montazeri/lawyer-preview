type ForbiddenComponentsControllerPermanentPropsTypes = {
  children: React.ReactNode;
  userInformation: UserType;
  ifForbidden?: ForbiddenType;
};

interface AllowIfUser {
  allowOnlyUsers: boolean;
}
interface AllowIfNotUser {
  allowOnlyNotUsers: boolean;
}

interface ForbiddenAlternativeComponent {
  alternativeComponent: React.ReactNode;
}
interface ForiddenNavigate {
  navigate: string;
}
type ForbiddenType = ForbiddenAlternativeComponent | ForiddenNavigate;

type ForbiddenComponentsControllerPropsTypes =
  ForbiddenComponentsControllerPermanentPropsTypes &
    (AllowIfUser | AllowIfNotUser);
