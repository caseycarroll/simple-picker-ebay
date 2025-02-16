import component from './picker-host.marko'

export default {
    title: "Picker Host",
    component
}

export const SingleGrid = {
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