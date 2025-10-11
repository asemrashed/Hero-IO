const getLocalData = () => {
    const data = localStorage.getItem("appList")
    if (data) {
        const res = JSON.parse(data)
        return res;
    } else {
        return []
    }
}

const addToLocal = (id) => {
    const storedApp = getLocalData();
    if (storedApp.includes(id)) {
        alert('app exist')
    } else {
        storedApp.push(id)
        const stored = JSON.stringify(storedApp)
        localStorage.setItem("appList", stored)
    }
}

const removeFromLocal = (id) => {
    const storedApp = getLocalData()
    const updatedAppList = storedApp.filter(app => app !== id)
    localStorage.setItem("appList", JSON.stringify(updatedAppList))
    
}

export {getLocalData, addToLocal, removeFromLocal};