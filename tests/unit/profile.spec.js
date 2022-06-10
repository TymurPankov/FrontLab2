import { mount } from '@vue/test-utils'
import Profile from '@/views/ProfileView.vue'

describe('Profile Page testing', () => {
    const $store = {
        state: {
            authUser: {
                email: "admin@admin.com",
                name: "Admin",
                username: "admin",
                date: "2000-08-14",
                password: "admin"
            }
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(Profile, {
        global: {
            mocks: {
                $store
            }
        }
    });

    window.alert = jest.fn();
    
    it('empty email', async () => {
        await wrapper.find('input[name="email"]').setValue("");
        await wrapper.find('input[name="username"]').setValue("username");
        await wrapper.find('input[name="name"]').setValue("name");
        await wrapper.find('input[name="date"]').setValue("date");
        await wrapper.find('input[name="password"]').setValue("password");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Fill all gaps');
    });

    it('empty username', async () => {
        await wrapper.find('input[name="email"]').setValue("email");
        await wrapper.find('input[name="username"]').setValue("");
        await wrapper.find('input[name="name"]').setValue("name");
        await wrapper.find('input[name="date"]').setValue("date");
        await wrapper.find('input[name="password"]').setValue("password");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Fill all gaps');
    });

    it('empty name', async () => {
        await wrapper.find('input[name="email"]').setValue("email");
        await wrapper.find('input[name="username"]').setValue("username");
        await wrapper.find('input[name="name"]').setValue("");
        await wrapper.find('input[name="date"]').setValue("date");
        await wrapper.find('input[name="password"]').setValue("password");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Fill all gaps');
    });

    it('empty date', async () => {
        await wrapper.find('input[name="email"]').setValue("email");
        await wrapper.find('input[name="username"]').setValue("username");
        await wrapper.find('input[name="name"]').setValue("name");
        await wrapper.find('input[name="date"]').setValue("");
        await wrapper.find('input[name="password"]').setValue("password");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Fill all gaps');
    });

    it('empty password', async () => {
        await wrapper.find('input[name="email"]').setValue("email");
        await wrapper.find('input[name="username"]').setValue("username");
        await wrapper.find('input[name="name"]').setValue("name");
        await wrapper.find('input[name="date"]').setValue("date");
        await wrapper.find('input[name="password"]').setValue("");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Fill all gaps');
    });
})