export interface UserProfileVm {
    id: string
}

export const createDefaultUserProfile = (): UserProfileVm => ({
    id: "-1"
})