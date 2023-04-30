

interface NewsBySlugXCategory {
    categoryName: string;
    newsSlug: string;
}

// This will come from the database
export const getAllNewsBySlugXCategory = (): NewsBySlugXCategory[] => {
    return [
        {
            categoryName: "baloncesto",
            newsSlug: "equipo-de-baloncesto-sala-gano"
        },
        {
            categoryName: "futbol",
            newsSlug: "equipo-de-futbol-sala-gano"
        },
        {
            categoryName: "tenis",
            newsSlug: "equipo-de-tenis-sala-gano"
        },
        {
            categoryName: "boxeo",
            newsSlug: "equipo-de-boxeo-sala-gano"
        },
    ]
}