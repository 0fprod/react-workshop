import { UserProfileVm, createDefaultUserProfileVm } from "./user-profile.vm";
import { BaseAPI, PARAMETER_FLAG } from "../../core";

class UserProfileAPI extends BaseAPI<UserProfileVm> {

  dataMapper(data: any): Promise<UserProfileVm> {
    const user: UserProfileVm = createDefaultUserProfileVm();
    const keysOfUserProfileVm = Object.keys(user);

    // map only the keys that belong to our viewModel
    const mappedUser = keysOfUserProfileVm.reduce(
      (accumulatedObject, currentProperty) => {
        accumulatedObject[currentProperty] = data[currentProperty];
        return accumulatedObject;
      },
      {}
    );
    return Promise.resolve(mappedUser as UserProfileVm);
  }

}
const url: string = `https://api.github.com/user/${PARAMETER_FLAG}`;
export const userProfileAPI = new UserProfileAPI(url);
