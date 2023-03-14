export default () => {
    class LocalStorageMock {
        store: any;
        length: number;
        key: (index: number) => string | null;

        constructor() {
            this.store = {};
            this.length = 1;
            this.key = (index: number) => '';
        }

        clear() {
            this.store = {};
        }

        getItem(key: string) {
            return this.store[key] || null;
        }

        setItem(key: string, value: string) {
            this.store[key] = String(value);
        }

        removeItem(key: string) {
            delete this.store[key];
        }
    }

    const fakeDocumentCookie = {
        cookies: '',

        get cookie() {
            return this.cookies;
        },

        set cookie(cookieValue) {
            const cookies = this.cookies.split(' ');
            const cookieName = cookieValue.split('=').shift();
            const cookieNameLength = cookieName ? cookieName.length : 1;
            let cookieIndex = -1;
            cookies.forEach((value, index) => {
                if (`${value.substr(0, cookieNameLength)}=` === `${cookieName}=`) {
                    cookieIndex = index;
                }
            });
            if (cookieIndex > -1) {
                cookies[cookieIndex] = `${cookieValue};`;
            } else {
                cookies.push(`${cookieValue};`);
            }
            this.cookies = cookies.join(' ').trim();
        }
    };

    global.localStorage = new LocalStorageMock();
    // @ts-ignore
    global.document = { cookie: fakeDocumentCookie };
};
