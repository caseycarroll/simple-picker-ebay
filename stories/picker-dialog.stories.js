import pickerDialog from './picker-dialog.marko'
import { fn } from '@storybook/test';

export default {
    title: "Picker Dialog",
    component: pickerDialog
}


export const Test = {
    args: {
        onChange: fn(),
        onSave: fn(),
        selectedAspects: [
            {
                title: "9",
                categoryID: "men",
            }
        ],
        aspects: {
            categories: [
                {
                    id: "men",
                    title: "Men",
                    values: [
                        {
                            title: "9",
                            categoryID: "men"
                        },
                        {
                            title: "10",
                            categoryID: "men"
                        },
                        {
                            title: "11",
                            categoryID: "men"
                        },
                        {
                            title: "12",
                            categoryID: "men"
                        },
                    ]
                },
                {
                    id: "women",
                    title: "Women",
                    values: [
                        {
                            title: "8",
                            categoryID: "women"
                        },
                        {
                            title: "9",
                            categoryID: "women"
                        },
                        {
                            title: "10",
                            categoryID: "women"
                        }
                    ]
                }
            ]
        }
    }
}