import { createContext, useContext, useState } from "react";


interface ContextType {
    activeIndex: number,
    setActiveIndex: (index: number) => void,
    articles: articleObj[],
    setArticles: (articles: articleObj[]) => void
}

const context = createContext<ContextType | undefined>(undefined)


interface ContextProviderProps {
    children: React.ReactNode;
}

interface articleObj{
    _id: string,
    author: string,
    title: string,
    coverImage: string,
    description: string,
    date: string,
    tags: string,
    content: {
        paragraphText: string,
        paragraphTitle: string,
        type: string,
        imageFile: string
    }[]
}

export const ContextProvider = ({children}: ContextProviderProps) => {
   
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [articles, setArticles] = useState<articleObj[]>([])

    return (
        <context.Provider value={{activeIndex, setActiveIndex,articles, setArticles}}>
            {children}
        </context.Provider>
    )
}


export const useContextValue = () => {
    const contextValue = useContext(context)

    if (!contextValue) {
        throw new Error("useContextValue must be used within a ContextProvider")
    }
    return contextValue
}