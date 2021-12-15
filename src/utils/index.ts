
export const addLoginInfoToStorage = (email: string, password: string, rememberPassword: boolean) => {
    localStorage.setItem("loginInstrucitons", JSON.stringify({email, password, rememberPassword: true}))
}

export const getLoginInfoFromStorage = () => {
    if(localStorage.getItem("loginInstrucitons")) {
        return JSON.parse(localStorage.getItem("loginInstrucitons") || "")
    } else {
        return {
            email: null,
            password: null,
            rememberPassword: null
        }
    }
}