import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {LRTBalanceData} from "./lrtBalanceData.model"

@Entity_()
export class LRTPointRecipient {
    constructor(props?: Partial<LRTPointRecipient>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    balance!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    points!: bigint

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    pointsDate!: Date

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    referralPoints!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    elPoints!: bigint

    @OneToMany_(() => LRTBalanceData, e => e.recipient)
    balanceDatas!: LRTBalanceData[]

    @Column_("int4", {nullable: false})
    referralCount!: number

    @Column_("int4", {nullable: false})
    referrerCount!: number
}
