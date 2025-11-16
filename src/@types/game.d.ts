import type { Card } from "@/domain/entities/Card"

export {}

declare global {

    type cut = {id: number, indexCard: number, card: Card, playerBuy: boolean}

    type GameRules = [string, number][]

    type Players = {id: number, name: string}[]

}