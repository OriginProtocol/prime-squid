import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {LRTWithdrawal} from "./lrtWithdrawal.model"
import {LRTWithdrawalStatus} from "./_lrtWithdrawalStatus"

@Entity_()
export class LRTWithdrawalRequest {
    constructor(props?: Partial<LRTWithdrawalRequest>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Index_()
    @ManyToOne_(() => LRTWithdrawal, {nullable: true})
    withdrawal!: LRTWithdrawal

    @Column_("varchar", {length: 9, nullable: false})
    status!: LRTWithdrawalStatus

    @Column_("text", {nullable: false})
    withdrawer!: string

    @Column_("text", {nullable: false})
    asset!: string

    @Column_("text", {nullable: false})
    strategy!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    primeETHAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    assetAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    sharesAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    claimedAmount!: bigint
}
