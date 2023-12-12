module.exports = class Data1702348712212 {
  name = 'Data1702348712212'

  async up(db) {
    await db.query(
      `CREATE TABLE "exchange_rate" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "pair" text NOT NULL, "base" text NOT NULL, "quote" text NOT NULL, "rate" numeric NOT NULL, CONSTRAINT "PK_5c5d27d2b900ef6cdeef0398472" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_9e23a3f1bf3634820c873a0fe8" ON "exchange_rate" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_c61a93768eed9e58ce399bbe01" ON "exchange_rate" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "strategy_balance" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "strategy" text NOT NULL, "asset" text NOT NULL, "balance" numeric NOT NULL, CONSTRAINT "PK_ca6f93229d1392e9546d01dae4f" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_0113bf0b63183bea0d22cd0d08" ON "strategy_balance" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_a88065dcd92011698bbe7df7b1" ON "strategy_balance" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "strategy_yield" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "strategy" text NOT NULL, "asset" text NOT NULL, "balance" numeric NOT NULL, "balance_weight" numeric NOT NULL, "earnings" numeric NOT NULL, "earnings_change" numeric NOT NULL, CONSTRAINT "PK_e87c46575e870fe2202190c2728" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_5108f2a2563d5665892d0c06b0" ON "strategy_yield" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_41c3567c9d43c598e07a0029c5" ON "strategy_yield" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "strategy_daily_yield" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "strategy" text NOT NULL, "asset" text NOT NULL, "balance" numeric NOT NULL, "balance_weight" numeric NOT NULL, "earnings" numeric NOT NULL, "earnings_change" numeric NOT NULL, "apr" numeric NOT NULL, "apy" numeric NOT NULL, CONSTRAINT "PK_b0dd2686bc95bb032ff532b3a0e" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_0ba1974747f1906e0c102cd2cd" ON "strategy_daily_yield" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_df364fb6e82d1feeed2a5dfffa" ON "strategy_daily_yield" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "erc20" ("id" character varying NOT NULL, "address" text NOT NULL, "name" text NOT NULL, "decimals" integer NOT NULL, "symbol" text NOT NULL, CONSTRAINT "PK_8d43ce15401ba044c55a72a8ceb" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE TABLE "erc20_holder" ("id" character varying NOT NULL, "address" text NOT NULL, "account" text NOT NULL, CONSTRAINT "PK_3adce7edbac4bcb03c662c3a1ac" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE TABLE "erc20_state" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "address" text NOT NULL, "total_supply" numeric NOT NULL, "holder_count" integer NOT NULL, CONSTRAINT "PK_eac1124b07bbdedafd4fff2f7b7" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_c3d08eb2dafe4b5b188924d835" ON "erc20_state" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_29e8edc6ba8cc37c0c16ff0baf" ON "erc20_state" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "erc20_balance" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "address" text NOT NULL, "account" text NOT NULL, "balance" numeric NOT NULL, CONSTRAINT "PK_069b6549e7a9938cc89f32063a6" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_c9fbe21a3411d93ea586af2a4c" ON "erc20_balance" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_d1f50dc39003331b76fad8a640" ON "erc20_balance" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "curve_pool_balance" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "address" text NOT NULL, "balance0" numeric NOT NULL, "balance1" numeric NOT NULL, "balance2" numeric NOT NULL, CONSTRAINT "PK_40412750bb910ca560aa084dd88" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_ffb0d0f86f03faacef7cb3e092" ON "curve_pool_balance" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_db5522c865eb8ed76fa7aeb4a8" ON "curve_pool_balance" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "balancer_pool_balance" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "address" text NOT NULL, "balance0" numeric NOT NULL, "balance1" numeric NOT NULL, "balance2" numeric NOT NULL, "balance3" numeric NOT NULL, CONSTRAINT "PK_441c7de293266414608c8e9de4c" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_642115282f1c3026edbc4bc2a7" ON "balancer_pool_balance" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_eecdc2d6132041e3806d77c7b4" ON "balancer_pool_balance" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "balancer_pool_rate" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "address" text NOT NULL, "rate0" numeric NOT NULL, "rate1" numeric NOT NULL, "rate2" numeric NOT NULL, "rate3" numeric NOT NULL, CONSTRAINT "PK_3ca9825db8d15c7850b715d9121" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_b1656f8d048f72b38bb637ea24" ON "balancer_pool_rate" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_c55345ef048232dfe36e60e4c5" ON "balancer_pool_rate" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "oeth" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "total_supply" numeric NOT NULL, "rebasing_supply" numeric NOT NULL, "non_rebasing_supply" numeric NOT NULL, CONSTRAINT "PK_de1d885501070dbd1ab6f8577ba" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_5b81a67229bac2d68e0dc92cc4" ON "oeth" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_408e5f79f83093aa5cf2b0ea32" ON "oeth" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "oeth_history" ("id" character varying NOT NULL, "value" numeric NOT NULL, "balance" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "type" character varying(8) NOT NULL, "address_id" character varying, CONSTRAINT "PK_2c7e7571cd9ea02b07a27a303f3" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_94e47c4c49128c78f60b185b46" ON "oeth_history" ("address_id") `,
    )
    await db.query(
      `CREATE INDEX "IDX_96956b1c8d29eb7066a97d5ea7" ON "oeth_history" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_b14170bdb7fbc0775bf55df15d" ON "oeth_history" ("tx_hash") `,
    )
    await db.query(
      `CREATE TABLE "oeth_address" ("id" character varying NOT NULL, "is_contract" boolean NOT NULL, "rebasing_option" character varying(6) NOT NULL, "balance" numeric NOT NULL, "earned" numeric NOT NULL, "credits" numeric NOT NULL, "last_updated" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_92a966afe47d584af73ce77a1cd" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE TABLE "oethapy" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "apr" numeric NOT NULL, "apy" numeric NOT NULL, "apy7_day_avg" numeric NOT NULL, "apy14_day_avg" numeric NOT NULL, "apy30_day_avg" numeric NOT NULL, "rebasing_credits_per_token" numeric NOT NULL, CONSTRAINT "PK_8dbb4d04591848361200f18f62a" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_b1a448045d1ed9d655b679a371" ON "oethapy" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_6b8a7a706a0701e659a7d81508" ON "oethapy" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_c0c03168bb0139e3cffda4f00e" ON "oethapy" ("tx_hash") `,
    )
    await db.query(
      `CREATE TABLE "oeth_rebase" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "total_supply" numeric NOT NULL, "rebasing_credits" numeric NOT NULL, "rebasing_credits_per_token" numeric NOT NULL, "fee_eth" numeric NOT NULL, "fee_usd" numeric NOT NULL, "yield_eth" numeric NOT NULL, "yield_usd" numeric NOT NULL, "apy_id" character varying, CONSTRAINT "PK_5f8f4dd071caf685b4ac2d54de3" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_fbb7b3f2fff9896eb683b86de7" ON "oeth_rebase" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_d3255d02d9407bba89380d01fa" ON "oeth_rebase" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_8b6bb0243472af88612fe6a01f" ON "oeth_rebase" ("tx_hash") `,
    )
    await db.query(
      `CREATE INDEX "IDX_3331819842173de7c27c046547" ON "oeth_rebase" ("apy_id") `,
    )
    await db.query(
      `CREATE TABLE "oeth_rebase_option" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "status" character varying(6) NOT NULL, "address_id" character varying, CONSTRAINT "PK_32971725d5523200b4b3b7c07e5" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_1fc6bbd88037bfbf4361776909" ON "oeth_rebase_option" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_cbb7ceb49ef7c45432d0171296" ON "oeth_rebase_option" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_355826dadaacc5ae2d63c82f28" ON "oeth_rebase_option" ("tx_hash") `,
    )
    await db.query(
      `CREATE INDEX "IDX_034428879698039839b4ba6ffe" ON "oeth_rebase_option" ("address_id") `,
    )
    await db.query(
      `CREATE TABLE "oeth_vault" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "weth" numeric NOT NULL, "st_eth" numeric NOT NULL, "r_eth" numeric NOT NULL, "frx_eth" numeric NOT NULL, CONSTRAINT "PK_9debaa84944fe2be9dc4219ba8f" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_d6298a294864b4eaf793cf35a4" ON "oeth_vault" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_e20cb507a673817b2c68720415" ON "oeth_vault" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "oeth_curve_lp" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "total_supply" numeric NOT NULL, "eth" numeric NOT NULL, "oeth" numeric NOT NULL, "total_supply_owned" numeric NOT NULL, "eth_owned" numeric NOT NULL, "oeth_owned" numeric NOT NULL, CONSTRAINT "PK_2b055044664e80f44d6172fdf54" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_d9bbd20e888fa1b4b2c5d2f039" ON "oeth_curve_lp" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_7617d593c36dce1b1565a8d74a" ON "oeth_curve_lp" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "oeth_frax_staking" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "sfrx_eth" numeric NOT NULL, CONSTRAINT "PK_694f53c8600ae88c7bdcf7305dd" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_ce6c2c65e90967dfeaac97025b" ON "oeth_frax_staking" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_1a7f7d650390e2f9c212651e05" ON "oeth_frax_staking" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "oeth_morpho_aave" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "weth" numeric NOT NULL, CONSTRAINT "PK_86de8f846e9335c92b8ad7df3a1" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_25e239b985844f1d33fac79981" ON "oeth_morpho_aave" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_a6662224e95eb6921bb14cb5f9" ON "oeth_morpho_aave" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "oeth_dripper" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "weth" numeric NOT NULL, "last_collect_timestamp" integer NOT NULL, "drip_rate_per_block" numeric NOT NULL, "drip_duration" numeric NOT NULL, CONSTRAINT "PK_77731281c1564c24eff0c265984" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_16ac742ceeb05d28e530da9649" ON "oeth_dripper" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_d356832c14603916a492608e7b" ON "oeth_dripper" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "oeth_balancer_meta_pool_strategy" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "r_eth" numeric NOT NULL, "weth" numeric NOT NULL, CONSTRAINT "PK_6ddf5b8ba878e6d706e59bd6de0" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_5e7ef383756fa18cb602f50089" ON "oeth_balancer_meta_pool_strategy" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_11d344b3e0e03cdb6697dd61f7" ON "oeth_balancer_meta_pool_strategy" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "oeth_strategy_holding_daily_stat" ("id" character varying NOT NULL, "symbol" text NOT NULL, "amount" numeric NOT NULL, "value" numeric NOT NULL, "strategy_daily_stat_id_id" character varying, CONSTRAINT "PK_7f1a62da5e53cf264c2f39b4acf" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_4e867f220975e615e6077d860c" ON "oeth_strategy_holding_daily_stat" ("strategy_daily_stat_id_id") `,
    )
    await db.query(
      `CREATE TABLE "oeth_strategy_daily_stat" ("id" character varying NOT NULL, "name" text NOT NULL, "total" numeric NOT NULL, "tvl" numeric NOT NULL, "daily_stat_id_id" character varying, CONSTRAINT "PK_8af1a0c60e67b05baf928787a8e" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_6c7096c96a000d8471256ca8fc" ON "oeth_strategy_daily_stat" ("daily_stat_id_id") `,
    )
    await db.query(
      `CREATE TABLE "oeth_collateral_daily_stat" ("id" character varying NOT NULL, "symbol" text NOT NULL, "amount" numeric NOT NULL, "price" numeric NOT NULL, "value" numeric NOT NULL, "daily_stat_id_id" character varying, CONSTRAINT "PK_5fb23d7bae30dffe4543e7aa069" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_a90045de50406be7bd56efd3ea" ON "oeth_collateral_daily_stat" ("daily_stat_id_id") `,
    )
    await db.query(
      `CREATE TABLE "oeth_daily_stat" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "apr" numeric NOT NULL, "apy" numeric NOT NULL, "apy7_day_avg" numeric NOT NULL, "apy14_day_avg" numeric NOT NULL, "apy30_day_avg" numeric NOT NULL, "total_supply" numeric NOT NULL, "total_supply_usd" numeric NOT NULL, "rebasing_supply" numeric NOT NULL, "non_rebasing_supply" numeric NOT NULL, "amo_supply" numeric NOT NULL, "dripper_weth" numeric NOT NULL, "wrapped_supply" numeric NOT NULL, "yield_eth" numeric NOT NULL, "yield_eth_all_time" numeric NOT NULL, "yield_usd" numeric NOT NULL, "yield_usd_all_time" numeric NOT NULL, "fees_eth" numeric NOT NULL, "fees_eth7_day" numeric NOT NULL, "fees_eth_all_time" numeric NOT NULL, "fees_usd" numeric NOT NULL, "fees_usd7_day" numeric NOT NULL, "fees_usd_all_time" numeric NOT NULL, "peg_price" numeric NOT NULL, CONSTRAINT "PK_9144a02ab13b1baa818a7d5eae5" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_98d9001013aa37425ca47b7126" ON "oeth_daily_stat" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_c3e66051c7df4efd6a8fa8f9c1" ON "oeth_daily_stat" ("timestamp") `,
    )
    await db.query(
      `CREATE TABLE "oeth_reward_token_collected" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "strategy" text NOT NULL, "recipient" text NOT NULL, "reward_token" text NOT NULL, "amount" numeric NOT NULL, CONSTRAINT "PK_47098cc5fbc7cb95c2374fa33cd" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_81a9fa43ae4a6ae63e4103127b" ON "oeth_reward_token_collected" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_d36c78b9c3e9d737f067638bc4" ON "oeth_reward_token_collected" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "oeth_activity" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "call_data_last4_bytes" text NOT NULL, "address" text, "sighash" text, "action" text, "exchange" text, "interface" text, "from_symbol" text, "to_symbol" text, "amount" numeric, CONSTRAINT "PK_8938e7a05e2377cb6dc46e6980c" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_701369d638018e8f191b7c048d" ON "oeth_activity" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_e3037b99481023edd17b98cd78" ON "oeth_activity" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_6537c67233447c5152bc7318f8" ON "oeth_activity" ("tx_hash") `,
    )
    await db.query(
      `CREATE TABLE "ogv" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "circulating" numeric NOT NULL, "staked" numeric NOT NULL, "total" numeric NOT NULL, CONSTRAINT "PK_f16038abf451ce82bd03ea54ee7" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_2418a8b8b92b2f5977be761cf9" ON "ogv" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_b8f20bcf48e4aa77e0f48d77db" ON "ogv" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ogv_address" ("id" character varying NOT NULL, "balance" numeric NOT NULL, "staked" numeric NOT NULL, "veogv_balance" numeric NOT NULL, "voting_power" numeric NOT NULL, "last_updated" TIMESTAMP WITH TIME ZONE NOT NULL, "delegatee_id" character varying, CONSTRAINT "PK_f13c77575687ef480ca0b7de5d8" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_49d26f287904b8b1aef6e9ac2b" ON "ogv_address" ("delegatee_id") `,
    )
    await db.query(
      `CREATE TABLE "ogv_lockup" ("id" character varying NOT NULL, "lockup_id" text NOT NULL, "amount" numeric NOT NULL, "end" TIMESTAMP WITH TIME ZONE NOT NULL, "veogv" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "address_id" character varying, CONSTRAINT "PK_6b6d5ed3a004dd3f546c1b11fa4" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_8114101b53d9d6bc26fe80838a" ON "ogv_lockup" ("lockup_id") `,
    )
    await db.query(
      `CREATE INDEX "IDX_8be94cd63e35b91adf1301a156" ON "ogv_lockup" ("address_id") `,
    )
    await db.query(
      `CREATE TABLE "ogv_lockup_tx_log" ("id" character varying NOT NULL, "hash" text NOT NULL, "event" character varying(8) NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "ogv_lockup_id" character varying, CONSTRAINT "PK_1c4a8425ce42f0c9da10056adee" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_b49fca291c97d9b55cd91f935f" ON "ogv_lockup_tx_log" ("ogv_lockup_id") `,
    )
    await db.query(
      `CREATE TABLE "ogv_proposal" ("id" character varying NOT NULL, "description" text, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "start_block" numeric NOT NULL, "end_block" numeric NOT NULL, "last_updated" TIMESTAMP WITH TIME ZONE NOT NULL, "status" character varying(9) NOT NULL, "proposer_id" character varying, CONSTRAINT "PK_b06db02b26fa37882e013579407" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_c62be3f16dfb3e4a09525c85af" ON "ogv_proposal" ("proposer_id") `,
    )
    await db.query(
      `CREATE TABLE "ogv_proposal_tx_log" ("id" character varying NOT NULL, "hash" text NOT NULL, "event" character varying(8) NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "proposal_id" character varying, CONSTRAINT "PK_da43c287069bba678ca5c60b1ad" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_5d5f5e10892290ee366d26de7d" ON "ogv_proposal_tx_log" ("proposal_id") `,
    )
    await db.query(
      `CREATE TABLE "ogv_proposal_vote" ("id" character varying NOT NULL, "weight" numeric NOT NULL, "type" character varying(7) NOT NULL, "tx_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "proposal_id" character varying, "voter_id" character varying, CONSTRAINT "PK_93c03f35b95221586cb8b83f523" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_58d732bc6523c2609d2725cc0a" ON "ogv_proposal_vote" ("proposal_id") `,
    )
    await db.query(
      `CREATE INDEX "IDX_2fd621aea353448fb3f17721bc" ON "ogv_proposal_vote" ("voter_id") `,
    )
    await db.query(
      `CREATE TABLE "ousd" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "total_supply" numeric NOT NULL, "rebasing_supply" numeric NOT NULL, "non_rebasing_supply" numeric NOT NULL, CONSTRAINT "PK_acecae4a20bc14b22d9f6738d8d" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_c8d1e285213b445b088805ac7c" ON "ousd" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_806949dd853b7e8acab5d03b81" ON "ousd" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_history" ("id" character varying NOT NULL, "value" numeric NOT NULL, "balance" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "type" character varying(8) NOT NULL, "address_id" character varying, CONSTRAINT "PK_dcbe3223b67f92d9ad4cffe8a7c" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_70291ea600c0c4d67d9bfe6a6b" ON "ousd_history" ("address_id") `,
    )
    await db.query(
      `CREATE INDEX "IDX_4d00d283e1ce3209dc43a0313c" ON "ousd_history" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_0c25caa59aa053a688a723d160" ON "ousd_history" ("tx_hash") `,
    )
    await db.query(
      `CREATE TABLE "ousd_address" ("id" character varying NOT NULL, "is_contract" boolean NOT NULL, "rebasing_option" character varying(6) NOT NULL, "balance" numeric NOT NULL, "earned" numeric NOT NULL, "credits" numeric NOT NULL, "last_updated" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_bb061344757ede566d62854af6a" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE TABLE "ousdapy" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "apr" numeric NOT NULL, "apy" numeric NOT NULL, "apy7_day_avg" numeric NOT NULL, "apy14_day_avg" numeric NOT NULL, "apy30_day_avg" numeric NOT NULL, "rebasing_credits_per_token" numeric NOT NULL, CONSTRAINT "PK_d9889b7153efc82dbe88f9a7a33" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_c514963f42908ce84d65a84a77" ON "ousdapy" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_4f606414b3b5ce1a366bd0fbf6" ON "ousdapy" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_0e84a81a109b66fe6f01f77c74" ON "ousdapy" ("tx_hash") `,
    )
    await db.query(
      `CREATE TABLE "ousd_rebase" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "total_supply" numeric NOT NULL, "rebasing_credits" numeric NOT NULL, "rebasing_credits_per_token" numeric NOT NULL, "fee_eth" numeric NOT NULL, "fee_usd" numeric NOT NULL, "yield_eth" numeric NOT NULL, "yield_usd" numeric NOT NULL, "apy_id" character varying, CONSTRAINT "PK_04cf0de72399a99798dde61b237" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_f8eb4a16ce58a146b3227ee21a" ON "ousd_rebase" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_3fb03b1a410e64c7367226d0b6" ON "ousd_rebase" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_1a76c478199672aaeec340f619" ON "ousd_rebase" ("tx_hash") `,
    )
    await db.query(
      `CREATE INDEX "IDX_427468c97f9838b804efd6c8e5" ON "ousd_rebase" ("apy_id") `,
    )
    await db.query(
      `CREATE TABLE "ousd_rebase_option" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "status" character varying(6) NOT NULL, "address_id" character varying, CONSTRAINT "PK_d684f90866027104f3c929dfe10" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_64bd23947dc4c67e3b6a3f9352" ON "ousd_rebase_option" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_9b774e46b8b1cf7f828133809a" ON "ousd_rebase_option" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_4e95bf069de04533d83a9a97fd" ON "ousd_rebase_option" ("tx_hash") `,
    )
    await db.query(
      `CREATE INDEX "IDX_b04173f9349ddd991a3b60e914" ON "ousd_rebase_option" ("address_id") `,
    )
    await db.query(
      `CREATE TABLE "ousd_vault" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, "usdt" numeric NOT NULL, "usdc" numeric NOT NULL, CONSTRAINT "PK_343f5538c71a1cd78f1659ef9d3" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_6860186ea2f56e2c7d54c22107" ON "ousd_vault" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_0d0a7113a505cf7f7adea9ca81" ON "ousd_vault" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_morpho_aave" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, "usdt" numeric NOT NULL, "usdc" numeric NOT NULL, CONSTRAINT "PK_60676cde905a822ba73ff3a5c85" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_78e0701c2e9a28242db37bd8f8" ON "ousd_morpho_aave" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_46ccf673b376d654052fbd53e6" ON "ousd_morpho_aave" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_morpho_compound" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, "usdt" numeric NOT NULL, "usdc" numeric NOT NULL, CONSTRAINT "PK_5f715d53ef8fc0fad595cacf4fa" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_9e7bd0d8ae23b877d5979ef80c" ON "ousd_morpho_compound" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_0bb3a0ad84071f1d80f6d4e90f" ON "ousd_morpho_compound" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "maker_dsr_strategy" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, CONSTRAINT "PK_196da2d6910009ae04e3542fe22" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_a35308a3c5dbaab2d321eb1525" ON "maker_dsr_strategy" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_844b219d8faf9b1d24ab2dba9a" ON "maker_dsr_strategy" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_flux_strategy" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, "usdt" numeric NOT NULL, "usdc" numeric NOT NULL, CONSTRAINT "PK_ac977221429e50e4de1ce253a8b" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_5b165b5d30b13e363d33a66e14" ON "ousd_flux_strategy" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_80f3392968fde7b99cccb805ac" ON "ousd_flux_strategy" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_compound_strategy" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, "usdt" numeric NOT NULL, "usdc" numeric NOT NULL, CONSTRAINT "PK_9030e82bf3479d03c04e0d1919c" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_6920b1db5dc577295ac4d1379d" ON "ousd_compound_strategy" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_89c6d7d3104bd36dc88a37add4" ON "ousd_compound_strategy" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_convex_strategy" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, "usdt" numeric NOT NULL, "usdc" numeric NOT NULL, CONSTRAINT "PK_2b8f6e749e15e49d8816f1ac949" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_2deac473cd0b2dd7082e7da148" ON "ousd_convex_strategy" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_157bf74171817dc5c60ee37036" ON "ousd_convex_strategy" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_aave_strategy" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, "usdt" numeric NOT NULL, "usdc" numeric NOT NULL, CONSTRAINT "PK_b4b7ac6e395aa722df500f93623" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_ca34b5a0a33bc9abdd8213c2fa" ON "ousd_aave_strategy" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_dacd7c98223d7bc8be074d71e4" ON "ousd_aave_strategy" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_meta_strategy" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, "usdt" numeric NOT NULL, "usdc" numeric NOT NULL, CONSTRAINT "PK_d99170af73d86fe74460bbfacc4" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_7e998dcf775263bc5df76ef987" ON "ousd_meta_strategy" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_55ce185680512d6a5b9fb0af89" ON "ousd_meta_strategy" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_convex_lusd_plus3_crv" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "dai" numeric NOT NULL, "usdt" numeric NOT NULL, "usdc" numeric NOT NULL, CONSTRAINT "PK_47290aa5dfa3cc5595f468e2f39" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_0783af95efb35fb3f13cde1656" ON "ousd_convex_lusd_plus3_crv" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_74ae01fb596a4f2733087ba454" ON "ousd_convex_lusd_plus3_crv" ("block_number") `,
    )
    await db.query(
      `CREATE TABLE "ousd_activity" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "call_data_last4_bytes" text NOT NULL, "address" text, "sighash" text, "action" text, "exchange" text, "interface" text, "from_symbol" text, "to_symbol" text, "amount" numeric, CONSTRAINT "PK_0f830a098aea9c70d8e8a626933" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_87dcf07f9e54c132535acf47a4" ON "ousd_activity" ("timestamp") `,
    )
    await db.query(
      `CREATE INDEX "IDX_e80a0f99e9f31fe69ac50b5a4c" ON "ousd_activity" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_2af2ad9975c024d1aa3535928f" ON "ousd_activity" ("tx_hash") `,
    )
    await db.query(
      `CREATE TABLE "ousd_strategy_holding_daily_stat" ("id" character varying NOT NULL, "symbol" text NOT NULL, "amount" numeric NOT NULL, "value" numeric NOT NULL, "strategy_daily_stat_id_id" character varying, CONSTRAINT "PK_ef2f51867e1d465c554262efd1b" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_e1a93bab3d12271dc114234d3a" ON "ousd_strategy_holding_daily_stat" ("strategy_daily_stat_id_id") `,
    )
    await db.query(
      `CREATE TABLE "ousd_strategy_daily_stat" ("id" character varying NOT NULL, "name" text NOT NULL, "total" numeric NOT NULL, "tvl" numeric NOT NULL, "daily_stat_id_id" character varying, CONSTRAINT "PK_ac65d3f28f290211ddeb950e157" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_3edda581683682257159cb0863" ON "ousd_strategy_daily_stat" ("daily_stat_id_id") `,
    )
    await db.query(
      `CREATE TABLE "ousd_collateral_daily_stat" ("id" character varying NOT NULL, "symbol" text NOT NULL, "amount" numeric NOT NULL, "price" numeric NOT NULL, "value" numeric NOT NULL, "daily_stat_id_id" character varying, CONSTRAINT "PK_85a804677f14a0784914e27b7b9" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_78be9d3f3dc1f31cf17ae810fe" ON "ousd_collateral_daily_stat" ("daily_stat_id_id") `,
    )
    await db.query(
      `CREATE TABLE "ousd_daily_stat" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "apr" numeric NOT NULL, "apy" numeric NOT NULL, "apy7_day_avg" numeric NOT NULL, "apy14_day_avg" numeric NOT NULL, "apy30_day_avg" numeric NOT NULL, "total_supply" numeric NOT NULL, "total_supply_usd" numeric NOT NULL, "rebasing_supply" numeric NOT NULL, "non_rebasing_supply" numeric NOT NULL, "amo_supply" numeric NOT NULL, "dripper_weth" numeric NOT NULL, "wrapped_supply" numeric NOT NULL, "yield_eth" numeric NOT NULL, "yield_eth_all_time" numeric NOT NULL, "yield_usd" numeric NOT NULL, "yield_usd_all_time" numeric NOT NULL, "fees_eth" numeric NOT NULL, "fees_eth7_day" numeric NOT NULL, "fees_eth_all_time" numeric NOT NULL, "fees_usd" numeric NOT NULL, "fees_usd7_day" numeric NOT NULL, "fees_usd_all_time" numeric NOT NULL, "peg_price" numeric NOT NULL, CONSTRAINT "PK_f8adaf321a99f2b4b877c262880" PRIMARY KEY ("id"))`,
    )
    await db.query(
      `CREATE INDEX "IDX_f9020d89932aad2d0de8923490" ON "ousd_daily_stat" ("block_number") `,
    )
    await db.query(
      `CREATE INDEX "IDX_0bb5f72bf5fa59ce8c232caa4c" ON "ousd_daily_stat" ("timestamp") `,
    )
    await db.query(
      `ALTER TABLE "oeth_history" ADD CONSTRAINT "FK_94e47c4c49128c78f60b185b46b" FOREIGN KEY ("address_id") REFERENCES "oeth_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "oeth_rebase" ADD CONSTRAINT "FK_3331819842173de7c27c046547a" FOREIGN KEY ("apy_id") REFERENCES "oethapy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "oeth_rebase_option" ADD CONSTRAINT "FK_034428879698039839b4ba6ffe8" FOREIGN KEY ("address_id") REFERENCES "oeth_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "oeth_strategy_holding_daily_stat" ADD CONSTRAINT "FK_4e867f220975e615e6077d860c1" FOREIGN KEY ("strategy_daily_stat_id_id") REFERENCES "oeth_strategy_daily_stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "oeth_strategy_daily_stat" ADD CONSTRAINT "FK_6c7096c96a000d8471256ca8fc3" FOREIGN KEY ("daily_stat_id_id") REFERENCES "oeth_daily_stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "oeth_collateral_daily_stat" ADD CONSTRAINT "FK_a90045de50406be7bd56efd3ea4" FOREIGN KEY ("daily_stat_id_id") REFERENCES "oeth_daily_stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ogv_address" ADD CONSTRAINT "FK_49d26f287904b8b1aef6e9ac2b3" FOREIGN KEY ("delegatee_id") REFERENCES "ogv_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ogv_lockup" ADD CONSTRAINT "FK_8be94cd63e35b91adf1301a156c" FOREIGN KEY ("address_id") REFERENCES "ogv_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ogv_lockup_tx_log" ADD CONSTRAINT "FK_b49fca291c97d9b55cd91f935f3" FOREIGN KEY ("ogv_lockup_id") REFERENCES "ogv_lockup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ogv_proposal" ADD CONSTRAINT "FK_c62be3f16dfb3e4a09525c85af8" FOREIGN KEY ("proposer_id") REFERENCES "ogv_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ogv_proposal_tx_log" ADD CONSTRAINT "FK_5d5f5e10892290ee366d26de7dc" FOREIGN KEY ("proposal_id") REFERENCES "ogv_proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ogv_proposal_vote" ADD CONSTRAINT "FK_58d732bc6523c2609d2725cc0ac" FOREIGN KEY ("proposal_id") REFERENCES "ogv_proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ogv_proposal_vote" ADD CONSTRAINT "FK_2fd621aea353448fb3f17721bc8" FOREIGN KEY ("voter_id") REFERENCES "ogv_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ousd_history" ADD CONSTRAINT "FK_70291ea600c0c4d67d9bfe6a6bf" FOREIGN KEY ("address_id") REFERENCES "ousd_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ousd_rebase" ADD CONSTRAINT "FK_427468c97f9838b804efd6c8e55" FOREIGN KEY ("apy_id") REFERENCES "ousdapy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ousd_rebase_option" ADD CONSTRAINT "FK_b04173f9349ddd991a3b60e914a" FOREIGN KEY ("address_id") REFERENCES "ousd_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ousd_strategy_holding_daily_stat" ADD CONSTRAINT "FK_e1a93bab3d12271dc114234d3ae" FOREIGN KEY ("strategy_daily_stat_id_id") REFERENCES "ousd_strategy_daily_stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ousd_strategy_daily_stat" ADD CONSTRAINT "FK_3edda581683682257159cb08638" FOREIGN KEY ("daily_stat_id_id") REFERENCES "ousd_daily_stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await db.query(
      `ALTER TABLE "ousd_collateral_daily_stat" ADD CONSTRAINT "FK_78be9d3f3dc1f31cf17ae810fee" FOREIGN KEY ("daily_stat_id_id") REFERENCES "ousd_daily_stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  async down(db) {
    await db.query(`DROP TABLE "exchange_rate"`)
    await db.query(`DROP INDEX "public"."IDX_9e23a3f1bf3634820c873a0fe8"`)
    await db.query(`DROP INDEX "public"."IDX_c61a93768eed9e58ce399bbe01"`)
    await db.query(`DROP TABLE "strategy_balance"`)
    await db.query(`DROP INDEX "public"."IDX_0113bf0b63183bea0d22cd0d08"`)
    await db.query(`DROP INDEX "public"."IDX_a88065dcd92011698bbe7df7b1"`)
    await db.query(`DROP TABLE "strategy_yield"`)
    await db.query(`DROP INDEX "public"."IDX_5108f2a2563d5665892d0c06b0"`)
    await db.query(`DROP INDEX "public"."IDX_41c3567c9d43c598e07a0029c5"`)
    await db.query(`DROP TABLE "strategy_daily_yield"`)
    await db.query(`DROP INDEX "public"."IDX_0ba1974747f1906e0c102cd2cd"`)
    await db.query(`DROP INDEX "public"."IDX_df364fb6e82d1feeed2a5dfffa"`)
    await db.query(`DROP TABLE "erc20"`)
    await db.query(`DROP TABLE "erc20_holder"`)
    await db.query(`DROP TABLE "erc20_state"`)
    await db.query(`DROP INDEX "public"."IDX_c3d08eb2dafe4b5b188924d835"`)
    await db.query(`DROP INDEX "public"."IDX_29e8edc6ba8cc37c0c16ff0baf"`)
    await db.query(`DROP TABLE "erc20_balance"`)
    await db.query(`DROP INDEX "public"."IDX_c9fbe21a3411d93ea586af2a4c"`)
    await db.query(`DROP INDEX "public"."IDX_d1f50dc39003331b76fad8a640"`)
    await db.query(`DROP TABLE "curve_pool_balance"`)
    await db.query(`DROP INDEX "public"."IDX_ffb0d0f86f03faacef7cb3e092"`)
    await db.query(`DROP INDEX "public"."IDX_db5522c865eb8ed76fa7aeb4a8"`)
    await db.query(`DROP TABLE "balancer_pool_balance"`)
    await db.query(`DROP INDEX "public"."IDX_642115282f1c3026edbc4bc2a7"`)
    await db.query(`DROP INDEX "public"."IDX_eecdc2d6132041e3806d77c7b4"`)
    await db.query(`DROP TABLE "balancer_pool_rate"`)
    await db.query(`DROP INDEX "public"."IDX_b1656f8d048f72b38bb637ea24"`)
    await db.query(`DROP INDEX "public"."IDX_c55345ef048232dfe36e60e4c5"`)
    await db.query(`DROP TABLE "oeth"`)
    await db.query(`DROP INDEX "public"."IDX_5b81a67229bac2d68e0dc92cc4"`)
    await db.query(`DROP INDEX "public"."IDX_408e5f79f83093aa5cf2b0ea32"`)
    await db.query(`DROP TABLE "oeth_history"`)
    await db.query(`DROP INDEX "public"."IDX_94e47c4c49128c78f60b185b46"`)
    await db.query(`DROP INDEX "public"."IDX_96956b1c8d29eb7066a97d5ea7"`)
    await db.query(`DROP INDEX "public"."IDX_b14170bdb7fbc0775bf55df15d"`)
    await db.query(`DROP TABLE "oeth_address"`)
    await db.query(`DROP TABLE "oethapy"`)
    await db.query(`DROP INDEX "public"."IDX_b1a448045d1ed9d655b679a371"`)
    await db.query(`DROP INDEX "public"."IDX_6b8a7a706a0701e659a7d81508"`)
    await db.query(`DROP INDEX "public"."IDX_c0c03168bb0139e3cffda4f00e"`)
    await db.query(`DROP TABLE "oeth_rebase"`)
    await db.query(`DROP INDEX "public"."IDX_fbb7b3f2fff9896eb683b86de7"`)
    await db.query(`DROP INDEX "public"."IDX_d3255d02d9407bba89380d01fa"`)
    await db.query(`DROP INDEX "public"."IDX_8b6bb0243472af88612fe6a01f"`)
    await db.query(`DROP INDEX "public"."IDX_3331819842173de7c27c046547"`)
    await db.query(`DROP TABLE "oeth_rebase_option"`)
    await db.query(`DROP INDEX "public"."IDX_1fc6bbd88037bfbf4361776909"`)
    await db.query(`DROP INDEX "public"."IDX_cbb7ceb49ef7c45432d0171296"`)
    await db.query(`DROP INDEX "public"."IDX_355826dadaacc5ae2d63c82f28"`)
    await db.query(`DROP INDEX "public"."IDX_034428879698039839b4ba6ffe"`)
    await db.query(`DROP TABLE "oeth_vault"`)
    await db.query(`DROP INDEX "public"."IDX_d6298a294864b4eaf793cf35a4"`)
    await db.query(`DROP INDEX "public"."IDX_e20cb507a673817b2c68720415"`)
    await db.query(`DROP TABLE "oeth_curve_lp"`)
    await db.query(`DROP INDEX "public"."IDX_d9bbd20e888fa1b4b2c5d2f039"`)
    await db.query(`DROP INDEX "public"."IDX_7617d593c36dce1b1565a8d74a"`)
    await db.query(`DROP TABLE "oeth_frax_staking"`)
    await db.query(`DROP INDEX "public"."IDX_ce6c2c65e90967dfeaac97025b"`)
    await db.query(`DROP INDEX "public"."IDX_1a7f7d650390e2f9c212651e05"`)
    await db.query(`DROP TABLE "oeth_morpho_aave"`)
    await db.query(`DROP INDEX "public"."IDX_25e239b985844f1d33fac79981"`)
    await db.query(`DROP INDEX "public"."IDX_a6662224e95eb6921bb14cb5f9"`)
    await db.query(`DROP TABLE "oeth_dripper"`)
    await db.query(`DROP INDEX "public"."IDX_16ac742ceeb05d28e530da9649"`)
    await db.query(`DROP INDEX "public"."IDX_d356832c14603916a492608e7b"`)
    await db.query(`DROP TABLE "oeth_balancer_meta_pool_strategy"`)
    await db.query(`DROP INDEX "public"."IDX_5e7ef383756fa18cb602f50089"`)
    await db.query(`DROP INDEX "public"."IDX_11d344b3e0e03cdb6697dd61f7"`)
    await db.query(`DROP TABLE "oeth_strategy_holding_daily_stat"`)
    await db.query(`DROP INDEX "public"."IDX_4e867f220975e615e6077d860c"`)
    await db.query(`DROP TABLE "oeth_strategy_daily_stat"`)
    await db.query(`DROP INDEX "public"."IDX_6c7096c96a000d8471256ca8fc"`)
    await db.query(`DROP TABLE "oeth_collateral_daily_stat"`)
    await db.query(`DROP INDEX "public"."IDX_a90045de50406be7bd56efd3ea"`)
    await db.query(`DROP TABLE "oeth_daily_stat"`)
    await db.query(`DROP INDEX "public"."IDX_98d9001013aa37425ca47b7126"`)
    await db.query(`DROP INDEX "public"."IDX_c3e66051c7df4efd6a8fa8f9c1"`)
    await db.query(`DROP TABLE "oeth_reward_token_collected"`)
    await db.query(`DROP INDEX "public"."IDX_81a9fa43ae4a6ae63e4103127b"`)
    await db.query(`DROP INDEX "public"."IDX_d36c78b9c3e9d737f067638bc4"`)
    await db.query(`DROP TABLE "oeth_activity"`)
    await db.query(`DROP INDEX "public"."IDX_701369d638018e8f191b7c048d"`)
    await db.query(`DROP INDEX "public"."IDX_e3037b99481023edd17b98cd78"`)
    await db.query(`DROP INDEX "public"."IDX_6537c67233447c5152bc7318f8"`)
    await db.query(`DROP TABLE "ogv"`)
    await db.query(`DROP INDEX "public"."IDX_2418a8b8b92b2f5977be761cf9"`)
    await db.query(`DROP INDEX "public"."IDX_b8f20bcf48e4aa77e0f48d77db"`)
    await db.query(`DROP TABLE "ogv_address"`)
    await db.query(`DROP INDEX "public"."IDX_49d26f287904b8b1aef6e9ac2b"`)
    await db.query(`DROP TABLE "ogv_lockup"`)
    await db.query(`DROP INDEX "public"."IDX_8114101b53d9d6bc26fe80838a"`)
    await db.query(`DROP INDEX "public"."IDX_8be94cd63e35b91adf1301a156"`)
    await db.query(`DROP TABLE "ogv_lockup_tx_log"`)
    await db.query(`DROP INDEX "public"."IDX_b49fca291c97d9b55cd91f935f"`)
    await db.query(`DROP TABLE "ogv_proposal"`)
    await db.query(`DROP INDEX "public"."IDX_c62be3f16dfb3e4a09525c85af"`)
    await db.query(`DROP TABLE "ogv_proposal_tx_log"`)
    await db.query(`DROP INDEX "public"."IDX_5d5f5e10892290ee366d26de7d"`)
    await db.query(`DROP TABLE "ogv_proposal_vote"`)
    await db.query(`DROP INDEX "public"."IDX_58d732bc6523c2609d2725cc0a"`)
    await db.query(`DROP INDEX "public"."IDX_2fd621aea353448fb3f17721bc"`)
    await db.query(`DROP TABLE "ousd"`)
    await db.query(`DROP INDEX "public"."IDX_c8d1e285213b445b088805ac7c"`)
    await db.query(`DROP INDEX "public"."IDX_806949dd853b7e8acab5d03b81"`)
    await db.query(`DROP TABLE "ousd_history"`)
    await db.query(`DROP INDEX "public"."IDX_70291ea600c0c4d67d9bfe6a6b"`)
    await db.query(`DROP INDEX "public"."IDX_4d00d283e1ce3209dc43a0313c"`)
    await db.query(`DROP INDEX "public"."IDX_0c25caa59aa053a688a723d160"`)
    await db.query(`DROP TABLE "ousd_address"`)
    await db.query(`DROP TABLE "ousdapy"`)
    await db.query(`DROP INDEX "public"."IDX_c514963f42908ce84d65a84a77"`)
    await db.query(`DROP INDEX "public"."IDX_4f606414b3b5ce1a366bd0fbf6"`)
    await db.query(`DROP INDEX "public"."IDX_0e84a81a109b66fe6f01f77c74"`)
    await db.query(`DROP TABLE "ousd_rebase"`)
    await db.query(`DROP INDEX "public"."IDX_f8eb4a16ce58a146b3227ee21a"`)
    await db.query(`DROP INDEX "public"."IDX_3fb03b1a410e64c7367226d0b6"`)
    await db.query(`DROP INDEX "public"."IDX_1a76c478199672aaeec340f619"`)
    await db.query(`DROP INDEX "public"."IDX_427468c97f9838b804efd6c8e5"`)
    await db.query(`DROP TABLE "ousd_rebase_option"`)
    await db.query(`DROP INDEX "public"."IDX_64bd23947dc4c67e3b6a3f9352"`)
    await db.query(`DROP INDEX "public"."IDX_9b774e46b8b1cf7f828133809a"`)
    await db.query(`DROP INDEX "public"."IDX_4e95bf069de04533d83a9a97fd"`)
    await db.query(`DROP INDEX "public"."IDX_b04173f9349ddd991a3b60e914"`)
    await db.query(`DROP TABLE "ousd_vault"`)
    await db.query(`DROP INDEX "public"."IDX_6860186ea2f56e2c7d54c22107"`)
    await db.query(`DROP INDEX "public"."IDX_0d0a7113a505cf7f7adea9ca81"`)
    await db.query(`DROP TABLE "ousd_morpho_aave"`)
    await db.query(`DROP INDEX "public"."IDX_78e0701c2e9a28242db37bd8f8"`)
    await db.query(`DROP INDEX "public"."IDX_46ccf673b376d654052fbd53e6"`)
    await db.query(`DROP TABLE "ousd_morpho_compound"`)
    await db.query(`DROP INDEX "public"."IDX_9e7bd0d8ae23b877d5979ef80c"`)
    await db.query(`DROP INDEX "public"."IDX_0bb3a0ad84071f1d80f6d4e90f"`)
    await db.query(`DROP TABLE "maker_dsr_strategy"`)
    await db.query(`DROP INDEX "public"."IDX_a35308a3c5dbaab2d321eb1525"`)
    await db.query(`DROP INDEX "public"."IDX_844b219d8faf9b1d24ab2dba9a"`)
    await db.query(`DROP TABLE "ousd_flux_strategy"`)
    await db.query(`DROP INDEX "public"."IDX_5b165b5d30b13e363d33a66e14"`)
    await db.query(`DROP INDEX "public"."IDX_80f3392968fde7b99cccb805ac"`)
    await db.query(`DROP TABLE "ousd_compound_strategy"`)
    await db.query(`DROP INDEX "public"."IDX_6920b1db5dc577295ac4d1379d"`)
    await db.query(`DROP INDEX "public"."IDX_89c6d7d3104bd36dc88a37add4"`)
    await db.query(`DROP TABLE "ousd_convex_strategy"`)
    await db.query(`DROP INDEX "public"."IDX_2deac473cd0b2dd7082e7da148"`)
    await db.query(`DROP INDEX "public"."IDX_157bf74171817dc5c60ee37036"`)
    await db.query(`DROP TABLE "ousd_aave_strategy"`)
    await db.query(`DROP INDEX "public"."IDX_ca34b5a0a33bc9abdd8213c2fa"`)
    await db.query(`DROP INDEX "public"."IDX_dacd7c98223d7bc8be074d71e4"`)
    await db.query(`DROP TABLE "ousd_meta_strategy"`)
    await db.query(`DROP INDEX "public"."IDX_7e998dcf775263bc5df76ef987"`)
    await db.query(`DROP INDEX "public"."IDX_55ce185680512d6a5b9fb0af89"`)
    await db.query(`DROP TABLE "ousd_convex_lusd_plus3_crv"`)
    await db.query(`DROP INDEX "public"."IDX_0783af95efb35fb3f13cde1656"`)
    await db.query(`DROP INDEX "public"."IDX_74ae01fb596a4f2733087ba454"`)
    await db.query(`DROP TABLE "ousd_activity"`)
    await db.query(`DROP INDEX "public"."IDX_87dcf07f9e54c132535acf47a4"`)
    await db.query(`DROP INDEX "public"."IDX_e80a0f99e9f31fe69ac50b5a4c"`)
    await db.query(`DROP INDEX "public"."IDX_2af2ad9975c024d1aa3535928f"`)
    await db.query(`DROP TABLE "ousd_strategy_holding_daily_stat"`)
    await db.query(`DROP INDEX "public"."IDX_e1a93bab3d12271dc114234d3a"`)
    await db.query(`DROP TABLE "ousd_strategy_daily_stat"`)
    await db.query(`DROP INDEX "public"."IDX_3edda581683682257159cb0863"`)
    await db.query(`DROP TABLE "ousd_collateral_daily_stat"`)
    await db.query(`DROP INDEX "public"."IDX_78be9d3f3dc1f31cf17ae810fe"`)
    await db.query(`DROP TABLE "ousd_daily_stat"`)
    await db.query(`DROP INDEX "public"."IDX_f9020d89932aad2d0de8923490"`)
    await db.query(`DROP INDEX "public"."IDX_0bb5f72bf5fa59ce8c232caa4c"`)
    await db.query(
      `ALTER TABLE "oeth_history" DROP CONSTRAINT "FK_94e47c4c49128c78f60b185b46b"`,
    )
    await db.query(
      `ALTER TABLE "oeth_rebase" DROP CONSTRAINT "FK_3331819842173de7c27c046547a"`,
    )
    await db.query(
      `ALTER TABLE "oeth_rebase_option" DROP CONSTRAINT "FK_034428879698039839b4ba6ffe8"`,
    )
    await db.query(
      `ALTER TABLE "oeth_strategy_holding_daily_stat" DROP CONSTRAINT "FK_4e867f220975e615e6077d860c1"`,
    )
    await db.query(
      `ALTER TABLE "oeth_strategy_daily_stat" DROP CONSTRAINT "FK_6c7096c96a000d8471256ca8fc3"`,
    )
    await db.query(
      `ALTER TABLE "oeth_collateral_daily_stat" DROP CONSTRAINT "FK_a90045de50406be7bd56efd3ea4"`,
    )
    await db.query(
      `ALTER TABLE "ogv_address" DROP CONSTRAINT "FK_49d26f287904b8b1aef6e9ac2b3"`,
    )
    await db.query(
      `ALTER TABLE "ogv_lockup" DROP CONSTRAINT "FK_8be94cd63e35b91adf1301a156c"`,
    )
    await db.query(
      `ALTER TABLE "ogv_lockup_tx_log" DROP CONSTRAINT "FK_b49fca291c97d9b55cd91f935f3"`,
    )
    await db.query(
      `ALTER TABLE "ogv_proposal" DROP CONSTRAINT "FK_c62be3f16dfb3e4a09525c85af8"`,
    )
    await db.query(
      `ALTER TABLE "ogv_proposal_tx_log" DROP CONSTRAINT "FK_5d5f5e10892290ee366d26de7dc"`,
    )
    await db.query(
      `ALTER TABLE "ogv_proposal_vote" DROP CONSTRAINT "FK_58d732bc6523c2609d2725cc0ac"`,
    )
    await db.query(
      `ALTER TABLE "ogv_proposal_vote" DROP CONSTRAINT "FK_2fd621aea353448fb3f17721bc8"`,
    )
    await db.query(
      `ALTER TABLE "ousd_history" DROP CONSTRAINT "FK_70291ea600c0c4d67d9bfe6a6bf"`,
    )
    await db.query(
      `ALTER TABLE "ousd_rebase" DROP CONSTRAINT "FK_427468c97f9838b804efd6c8e55"`,
    )
    await db.query(
      `ALTER TABLE "ousd_rebase_option" DROP CONSTRAINT "FK_b04173f9349ddd991a3b60e914a"`,
    )
    await db.query(
      `ALTER TABLE "ousd_strategy_holding_daily_stat" DROP CONSTRAINT "FK_e1a93bab3d12271dc114234d3ae"`,
    )
    await db.query(
      `ALTER TABLE "ousd_strategy_daily_stat" DROP CONSTRAINT "FK_3edda581683682257159cb08638"`,
    )
    await db.query(
      `ALTER TABLE "ousd_collateral_daily_stat" DROP CONSTRAINT "FK_78be9d3f3dc1f31cf17ae810fee"`,
    )
  }
}
