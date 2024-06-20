import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {LRTWithdrawalStatus} from "./_lrtWithdrawalStatus"

@Entity_()
export class LRTWithdrawal {
    constructor(props?: Partial<LRTWithdrawal>) {
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

    @Column_("varchar", {length: 9, nullable: false})
    status!: LRTWithdrawalStatus

    @Column_("text", {nullable: false})
    staker!: string

    @Column_("text", {nullable: false})
    delegatedTo!: string

    @Column_("text", {nullable: false})
    withdrawer!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nonce!: bigint

    @Column_("int4", {nullable: false})
    startBlock!: number

    @Column_("text", {array: true, nullable: true})
    strategies!: (string)[] | undefined | null

    @Column_("text", {array: true, nullable: true})
    shares!: (string)[] | undefined | null
}
