export const getCountFormated = (viewsCount) => {
    const views = Number(viewsCount)
  
    if (views >= 1000000000000) {
      return `${Math.round((views / 1000000000000) * 100) / 100}T`
    }
    if (views >= 1000000000) {
      return `${Math.round((views / 1000000000) * 100) / 100}B`
    }
    if (views >= 1000000) {
      return `${Math.round((views / 1000000) * 100) / 100}M`
    }
    if (views >= 1000) {
      return `${Math.round((views / 1000) * 100) / 100}K`
    } else {
      return `${Math.round((views / 100) * 100) / 100}`
    }
  }