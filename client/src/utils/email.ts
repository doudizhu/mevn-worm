// 常用邮箱地址
const siteMap = new Map();
siteMap.set('163.com', 'http://mail.163.com');
siteMap.set('126.com', 'http://mail.126.com/')
siteMap.set('qq.com', 'http://mail.qq.com')
siteMap.set('sina.com', 'http://mail.sina.com.cn')
siteMap.set('hotmail.com', 'https://login.live.com')
siteMap.set('sohu.com', 'http://mail.sohu.com/fe/#/login')
siteMap.set('gmail.com', 'https://mail.google.com/')
siteMap.set('139.com', 'http://mail.10086.cn/')
siteMap.set('vip.163.com', 'http://vip.163.com/')
siteMap.set('yeah.net', 'http://www.yeah.net/')

const emailAddress: string[] = [
    '@163.com',
    '@126.com',
    '@qq.com',
    '@sina.com',
    '@hotmail.com',
    '@sohu.com',
    '@gmail.com',
    '@139.com',
    '@vip.163.com',
    '@yeah.net',
]

/**
 * 邮箱脱敏 xxx****@xx.com
 * @param email 邮箱
 */
export const emailDesensitization = (email: string): string => {
    return email = email.replace(/^(.{3})(.*)(@.*)$/, '$1****$3')
}

/**
 * 获取该邮箱网站地址
 * @param email 邮箱
 */
export const  loginEmail = (email: string): string => {
    return siteMap.get(email.split('@')[1]) 
}

export const emailSearch = (query: string, cb?: any) => {
    const queryList = query.split('@')
    const result = query ? jointAddress(queryList) : []
    cb(result)
}

const jointAddress = (queryList: string[]) => {
    if (queryList.length < 2) {
        return emailAddress.map((item) => {
            return { value: queryList[0] + item }
        })
    } else {
        return emailAddress.filter((item) => {
            return item.includes(queryList[1])
        }).map((cur) => {
            return { value: queryList[0] + cur }
        })
    }
}
