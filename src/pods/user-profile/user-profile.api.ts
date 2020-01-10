import { UserProfileVm, createDefaultUserProfileVm } from "./user-profile.vm";

class UserProfileAPI {
  geUserProfile(userId: number): Promise<UserProfileVm> {
    const gitHubMembersUrl: string = `https://api.github.com/user/${userId}`;

    return fetch(gitHubMembersUrl)
      .then(response => this.checkStatus(response))
      .then(response => this.parseJSON(response))
      .then(data => this.resolveUser(data));
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  private resolveUser(data: any): Promise<UserProfileVm> {
    const user: UserProfileVm = createDefaultUserProfileVm();

    const keysOfUserProfileVm = Object.keys(user);

    // map only the keys that belong to our viewModel
    const mappedUser = keysOfUserProfileVm.reduce((accumulatedObject, currentProperty) => {
      accumulatedObject[currentProperty] = data[currentProperty];
      return accumulatedObject;
    }, {});


    return Promise.resolve(mappedUser as UserProfileVm);
  }
}

export const userProfileAPI = new UserProfileAPI();
