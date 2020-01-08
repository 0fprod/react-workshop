import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { UserProfileVm, createDefaultUserProfile } from './user-profile.vm';
import { UserProfileComponent } from './user-profile.component';


export const UserProfileContainer = () => {
  // const history = useHistory();
  const [defaultUser] = React.useState<UserProfileVm>(createDefaultUserProfile());
  

//   const navigateToHotel = (loginInfo: LoginEntityVm) => {
//     updateLogin(loginInfo.login);
//     history.push(linkRoutes.hotelCollection);
//   };

  
  return <UserProfileComponent userId="" initialUser={defaultUser} />;
};