export const downFun = ()=> {
    let a=document.createElement('a')
    a.style.display = 'none'
    a.setAttribute('download', 'smartTeemo Setup 1.2.0.exe')
    a.href = require('@/assets/smartTeemo Setup 1.2.0.exe')
    document.body.appendChild(a)
    console.log('href', a.href)
    a.click()
    document.body.removeChild(a)
}