'use client'

import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Component } from "@/lib/types";
import { useState } from "react";
import { ComponentCard } from "./component-card";

type Props = {
    categoryId: string;
    categoryName: string;
    onSelect: (component: Component) => void
}

export function AddComponentDialogContent({
    categoryId,
    categoryName,
    onSelect
}: Props) {
    const [components, setComponents] = useState<Component[]>([]);
    const [loading, setLoading] = useState(true);

    return (
        <DialogContent className="max-w-4xl w-[90vw] max-h-[85vh] overflow-hidden flex flex-col">
            <DialogHeader>
                <DialogTitle>Добавить компонент - {categoryName}</DialogTitle>
            </DialogHeader>
            <div className="overflow-y-auto flex-1 mx-1 px-1">
                {
                    components.length > 0 && (
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                components.map((c) => (
                                    <ComponentCard
                                        key={c.id}
                                        name={c.name}
                                        price={c.price}
                                        onClick={() => onSelect(c)}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </DialogContent>
    )
}