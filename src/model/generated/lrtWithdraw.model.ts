import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {WithdrawStatus} from "./_withdrawStatus"

@Entity_()
export class LRTWithdraw {
    constructor(props?: Partial<LRTWithdraw>) {
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
    @Column_("text", {nullable: false})
    recipient!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Column_("varchar", {length: 9, nullable: false})
    status!: WithdrawStatus

    @Column_("text", {nullable: false})
    calldata!: string
}
