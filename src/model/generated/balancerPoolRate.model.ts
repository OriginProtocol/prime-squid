import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class BalancerPoolRate {
    constructor(props?: Partial<BalancerPoolRate>) {
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

    @Column_("text", {nullable: false})
    address!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    rate0!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    rate1!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    rate2!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    rate3!: bigint
}
