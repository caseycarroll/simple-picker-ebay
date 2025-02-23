import component from './picker-host.marko'

export default {
    title: "Picker Host",
    component
}

export const SingleGridWithInitialSelection = {
    args: {
        initialSelections: {
            "mens-9": { title: "9", id: "mens-9"}
        },
        aspects: {
            categories: [
                {
                    id: "men",
                    title: "Men",
                    values: [
                        {
                            title: "9",
                            id: "mens-9"
                        },
                        {
                            title: "10",
                            id: "mens-10"
                        },
                        {
                            title: "11",
                            id: "mens-11"
                        },
                        {
                            title: "12",
                            id: "mens-12"
                        },
                    ]
                },
            ]
        }
    }
}

export const Groups = {
    args: {
        aspects: {
            categories: [
                {
                    id: "men",
                    title: "Men",
                    groupings: [
                        {
                            title: "Standard",
                            values: [
                                {
                                    title: "9",
                                    id: "mens-standard-9"
                                },
                                {
                                    title: "10",
                                    id: "mens-standard-10"
                                },
                                {
                                    title: "11",
                                    id: "mens-standard-11"
                                },
                                {
                                    title: "12",
                                    id: "mens-standard-12"
                                },
                            ]
                        },
                        {
                            title: "Wide",
                            values: [
                                {
                                    title: "9",
                                    id: "mens-wide-9"
                                },
                                {
                                    title: "10",
                                    id: "mens-wide-10"
                                },
                                {
                                    title: "11",
                                    id: "mens-wide-11"
                                },
                                {
                                    title: "12",
                                    id: "mens-wide-12"
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    }
}

export const Tabs = {
    args: {
        aspects: {
            categories: [
                {
                    id: "men",
                    title: "Men",
                    values: [
                        {
                            title: "9",
                            id: "mens-9"
                        },
                        {
                            title: "10",
                            id: "mens-10"
                        },
                        {
                            title: "11",
                            id: "mens-11"
                        },
                        {
                            title: "12",
                            id: "mens-12"
                        },
                    ]
                },
                {
                    id: "women",
                    title: "Women",
                    values: [
                        {
                            title: "8",
                            id: "womens-8"
                        },
                        {
                            title: "9",
                            id: "womens-9"
                        },
                        {
                            title: "10",
                            id: "womens-10"
                        }
                    ]
                }
            ]
        }
    }
}

export const TabsWithGroups = {
    args: {
        aspects: {
            categories: [
                {
                    id: "men",
                    title: "Men",
                    groupings: [
                        {
                            title: "Standard",
                            values: [
                                {
                                    title: "9",
                                    id: "mens-standard-9"
                                },
                                {
                                    title: "10",
                                    id: "mens-standard-10"
                                },
                                {
                                    title: "11",
                                    id: "mens-standard-11"
                                },
                                {
                                    title: "12",
                                    id: "mens-standard-12"
                                },
                            ]
                        },
                        {
                            title: "Wide",
                            values: [
                                {
                                    title: "9",
                                    id: "mens-wide-9"
                                },
                                {
                                    title: "10",
                                    id: "mens-wide-10"
                                },
                                {
                                    title: "11",
                                    id: "mens-wide-11"
                                },
                                {
                                    title: "12",
                                    id: "mens-wide-12"
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "women",
                    title: "Women",
                    groupings: [
                        {
                            title: "Standard",
                            values: [
                                {
                                    title: "9",
                                    id: "womens-standard-9"
                                },
                                {
                                    title: "10",
                                    id: "womens-standard-10"
                                },
                                {
                                    title: "11",
                                    id: "womens-standard-11"
                                },
                                {
                                    title: "12",
                                    id: "womens-standard-12"
                                },
                            ]
                        },
                        {
                            title: "Wide",
                            values: [
                                {
                                    title: "9",
                                    id: "womens-wide-9"
                                },
                                {
                                    title: "10",
                                    id: "womens-wide-10"
                                },
                                {
                                    title: "11",
                                    id: "womens-wide-11"
                                },
                                {
                                    title: "12",
                                    id: "womens-wide-12"
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    }
}

export const TabsWithRowsWithGroups = {
    args: {
        aspects: {
            categories: [
                {
                    id: "men",
                    title: "Men",
                    subcategories: [
                        {
                            title: "Mens Pants",
                            groupings: [
                                {
                                    title: "Standard",
                                    values: [
                                        {
                                            title: "9",
                                            id: "mens-standard-9"
                                        },
                                        {
                                            title: "10",
                                            id: "mens-standard-10"
                                        },
                                        {
                                            title: "11",
                                            id: "mens-standard-11"
                                        },
                                        {
                                            title: "12",
                                            id: "mens-standard-12"
                                        },
                                    ]
                                },
                                {
                                    title: "Wide",
                                    values: [
                                        {
                                            title: "9",
                                            id: "mens-wide-9"
                                        },
                                        {
                                            title: "10",
                                            id: "mens-wide-10"
                                        },
                                        {
                                            title: "11",
                                            id: "mens-wide-11"
                                        },
                                        {
                                            title: "12",
                                            id: "mens-wide-12"
                                        },
                                    ]
                                },
                            ]
                        }
                    ] 
                },
                {
                    id: "women",
                    title: "Women",
                    subcategories: [
                        {
                            title: "Womens Pants",
                            groupings: [
                                {
                                    title: "Standard",
                                    values: [
                                        {
                                            title: "9",
                                            id: "womens-standard-9"
                                        },
                                        {
                                            title: "10",
                                            id: "womens-standard-10"
                                        },
                                        {
                                            title: "11",
                                            id: "womens-standard-11"
                                        },
                                        {
                                            title: "12",
                                            id: "womens-standard-12"
                                        },
                                    ]
                                },
                                {
                                    title: "Wide",
                                    values: [
                                        {
                                            title: "9",
                                            id: "womens-wide-9"
                                        },
                                        {
                                            title: "10",
                                            id: "womens-wide-10"
                                        },
                                        {
                                            title: "11",
                                            id: "womens-wide-11"
                                        },
                                        {
                                            title: "12",
                                            id: "womens-wide-12"
                                        },
                                    ]
                                },
                            ]
                        }
                    ],
                }
            ]
        },
    }
}