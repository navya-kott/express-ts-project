import { User } from '@/schema/user'

export const userList = async () => {
    try {

        return await User.find({
            $text: { $search:  "\"abhijith"},
            $caseSensitive: true
        })

    } catch (error) {
        console.log(error);

    }

}
