import {Injectable} from '@angular/core';

@Injectable()
export class MetaService {

    constructor() {
    }

    getMetaDataForBarometer(curr) {
        var metadata = {
'BTC': {'header': 'Bitcoin (BTC)', 'teaser': 'The original blockchain created by Satoshi Nakamoto', 'img':'./assets/images/btc.png', 'github': 'bitcoin', 'link_name_on_cmc': 'bitcoin', 'reddit': 'bitcoin'},
'ETH': {'header': 'Ethereum (ETH)', 'teaser': 'The pioneer of smart contract platforms', 'img':'./assets/images/eth.png', 'github': 'ethereum', 'link_name_on_cmc': 'ethereum', 'reddit': 'ethereum'},
'XRP': {'header': 'Ripple (XRP)', 'teaser': 'A blockchain focused on bank to bank transactions.', 'img':'./assets/images/xrp.png', 'github': 'ripple', 'link_name_on_cmc': 'ripple', 'reddit': 'ripple'},
'IOTA': {'header': 'IOTA (MIOTA)', 'teaser': 'Pioneering chains based on Direct Acyclic Graphs without transaction fees', 'img':'./assets/images/iota.png', 'github': 'iotaledger', 'link_name_on_cmc': 'iota', 'reddit': 'iota'},
'BCH': {'header': 'Bitcoin Cash (BCH)', 'teaser': 'Bitcoin fork with an 8mb block size and on-chain scaling.', 'img':'./assets/images/bch.png', 'github': 'nogithub', 'link_name_on_cmc': 'bitcoin-cash', 'reddit': 'btc'},
'ADA': {'header': 'Cardano (ADA)', 'teaser': 'A multi layered currency and smart contract platform that seperates monetary and computation processes.', 'img':'./assets/images/ada.png', 'link_name_on_cmc': 'cardano', 'reddit': 'cardano'},
'EOS': {'header': 'EOS (EOS)', 'teaser': 'A generalized graphene blockchain that aims to be a blockchain powered operating system.', 'img':'./assets/images/eos.png', 'link_name_on_cmc': 'eos', 'reddit': 'eos'},
'LTC': {'header': 'Litecoin (LTC)', 'teaser': 'A fork of Bitcoin with fast and cheaper transactions', 'img':'./assets/images/ltc.png', 'github': 'litecoin-project', 'link_name_on_cmc': 'litecoin', 'reddit': 'litecoin'},
'TRON': {'header': 'TRON (TRX)', 'teaser': 'China and Singapore based decentralized entertainment content storage and distribution ecosystem', 'img':'./assets/images/trx.png', 'link_name_on_cmc': 'tron', 'reddit': 'tronix'},
'NEO': {'header': 'NEO (NEO)', 'teaser': 'A China based smart-contract blockchain', 'img':'./assets/images/neo.png', 'link_name_on_cmc': 'neo', 'reddit': 'neo'},
'VEN': {'header': 'VeChain (VEN)', 'teaser': 'The world’s leading blockchain platform for products and information', 'img':'./assets/images/neo.png', 'link_name_on_cmc': 'vechain', 'reddit': 'vechain'},
'NEM': {'header': 'NEM (NEM)', 'teaser': 'A Japan based blockchain that pioneered the idea of Proof of Importance', 'img':'./assets/images/nem.png', 'link_name_on_cmc': 'nem'},
'OMG': {'header': 'OmiseGo (OMG)', 'teaser': 'A Thailand based currency that aims to decentralize banking and put the individual in control', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'omisego'},
'XMR': {'header': 'Monero (XMR)', 'teaser': 'A leading privacy currency that is private by default', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'monero'},
'AE': {'header': 'Aeternity (AE)', 'teaser': 'Scalable smart contracts interfacing with real world data.', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'aeternity'},
'BNB': {'header': 'Binance (BNB)', 'teaser': 'Currency issued by the China based cryptocurrency Binance', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'binance-coin'},
'QTUM': {'header': 'QTUM (QTUM)', 'teaser': 'A singapore based smart-contract platform that can interoperate with smart contracts on other platforms.', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'qtum'},
'DCR': {'header': 'Decred (DCR)', 'teaser': 'Pioneer of on chain governance and hardforking', 'img':'./assets/images/omg.png', 'github': 'decred', 'link_name_on_cmc': 'decred', 'reddit': 'decred'},
'LSK': {'header': 'Lisk (LSK)', 'teaser': 'A javascript based smart-contract platform.', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'lisk'},
'BCN': {'header': 'Bytecoin (BCN)', 'teaser': 'Bytecoin is a pioneer of the cryptonote hashing algorithm, which provided added privacy benefits', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'bytecoin-bcn'},
'DASH': {'header': 'Dash (DASH)', 'teaser': 'A blockchain that pioneered built-in governance and the masternode concept', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'dash'},
'XLM': {'header': 'Stellar (XLM)', 'teaser': 'Fast transactions based on digital IOUs and XRP competitor ', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'stellar'},
'ETC': {'header': 'Ethereum Classic (ETC)', 'teaser': 'June 2016 Ethereum fork after the DAO hack', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'ethereum-classic'},
'VEC': {'header': 'VeChain (VEC)', 'teaser': 'leading Enterprise-focused dApp/ICO platform for products and information', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'vechain'},
'ZEC': {'header': 'Zcash (ZEC)', 'teaser': 'A privacy focused currency with the option to create completely anonymous transactions', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'zcash'},
'ONT': {'header': 'Ontology (ONT)', 'teaser': 'Customize different public blockchains for different applications', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'ontology'},
    'ICX': {'header': 'ICON (ICX)', 'teaser': 'Hyperconnecting different blockchains without intermediary', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'icon'},
        'ZIL': {'header': 'Zilliqa (ZIL)', 'teaser': 'High throughput blockchain platform with sharding', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'zilliqa'},
    'ZRX': {'header': '0x (ZRX)', 'teaser': 'smart contract powered decentralized token exchange protocol', 'img':'./assets/images/0x.png', 'link_name_on_cmc': '0x'},
        }

        return metadata[curr]
    }

}

export var metadata = {
'BTC': {'header': 'Bitcoin (BTC)', 'teaser': 'The original blockchain created by Satoshi Nakamoto', 'img':'./assets/images/btc.png', 'github': 'bitcoin', 'link_name_on_cmc': 'bitcoin'},
'ETH': {'header': 'Ethereum (ETH)', 'teaser': 'The pioneer of smart contract platforms', 'img':'./assets/images/eth.png', 'github': 'ethereum', 'link_name_on_cmc': 'ethereum'},
'XRP': {'header': 'Ripple (XRP)', 'teaser': 'A blockchain focused on bank to bank transactions.', 'img':'./assets/images/xrp.png', 'github': 'ripple', 'link_name_on_cmc': 'ripple'},
'IOTA': {'header': 'IOTA (MIOTA)', 'teaser': 'Pioneering chains based on Direct Acyclic Graphs without transaction fees', 'img':'./assets/images/iota.png', 'github': 'iotaledger', 'link_name_on_cmc': 'iota'},
'BCH': {'header': 'Bitcoin Cash (BCH)', 'teaser': 'Bitcoin fork with an 8mb block size and on-chain scaling.', 'img':'./assets/images/bch.png', 'github': 'nogithub', 'link_name_on_cmc': 'bitcoin-cash'},
'ADA': {'header': 'Cardano (ADA)', 'teaser': 'A multi layered currency and smart contract platform that seperates monetary and computation processes.', 'img':'./assets/images/ada.png', 'link_name_on_cmc': 'cardano'},
'EOS': {'header': 'EOS (EOS)', 'teaser': 'A generalized graphene blockchain that aims to be a blockchain powered operating system.', 'img':'./assets/images/eos.png', 'link_name_on_cmc': 'eos'},
'LTC': {'header': 'Litecoin (LTC)', 'teaser': 'A fork of Bitcoin with fast and cheaper transactions', 'img':'./assets/images/ltc.png', 'github': 'litecoin-project', 'link_name_on_cmc': 'litecoin'},
'TRON': {'header': 'TRON (TRX)', 'teaser': 'China and Singapore based decentralized entertainment content storage and distribution ecosystem', 'img':'./assets/images/trx.png', 'link_name_on_cmc': 'tron'},
'NEO': {'header': 'NEO (NEO)', 'teaser': 'A China based smart-contract blockchain', 'img':'./assets/images/neo.png', 'link_name_on_cmc': 'neo'},
'VEN': {'header': 'VeChain (VEN)', 'teaser': 'The world’s leading blockchain platform for products and information', 'img':'./assets/images/neo.png', 'link_name_on_cmc': 'vechain'},
'NEM': {'header': 'NEM (NEM)', 'teaser': 'A Japan based blockchain that pioneered the idea of Proof of Importance', 'img':'./assets/images/nem.png', 'link_name_on_cmc': 'nem'},
'OMG': {'header': 'OmiseGo (OMG)', 'teaser': 'A Thailand based currency that aims to decentralize banking and put the individual in control', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'omisego'},
'XMR': {'header': 'Monero (XMR)', 'teaser': 'A leading privacy currency that is private by default', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'monero'},
'AE': {'header': 'Aeternity (AE)', 'teaser': 'Scalable smart contracts interfacing with real world data.', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'aeternity'},
'BNB': {'header': 'Binance (BNB)', 'teaser': 'Currency issued by the China based cryptocurrency Binance', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'binance-coin'},
'QTUM': {'header': 'QTUM (QTUM)', 'teaser': 'A singapore based smart-contract platform that can interoperate with smart contracts on other platforms.', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'qtum'},
'DCR': {'header': 'Decred (DCR)', 'teaser': 'Pioneer of on chain governance and hardforking', 'img':'./assets/images/omg.png', 'github': 'decred', 'link_name_on_cmc': 'decred'},
'LSK': {'header': 'Lisk (LSK)', 'teaser': 'A javascript based smart-contract platform.', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'lisk'},
'BCN': {'header': 'Bytecoin (BCN)', 'teaser': 'Bytecoin is a pioneer of the cryptonote hashing algorithm, which provided added privacy benefits', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'bytecoin-bcn'},
'DASH': {'header': 'Dash (DASH)', 'teaser': 'A blockchain that pioneered built-in governance and the masternode concept', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'dash'},
'XLM': {'header': 'Stellar (XLM)', 'teaser': 'Fast transactions based on digital IOUs and XRP competitor ', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'stellar'},
'ETC': {'header': 'Ethereum Classic (ETC)', 'teaser': 'June 2016 Ethereum fork after the DAO hack', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'ethereum-classic'},
'VEC': {'header': 'VeChain (VEC)', 'teaser': 'leading Enterprise-focused dApp/ICO platform for products and information', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'vechain'},
'ZEC': {'header': 'Zcash (ZEC)', 'teaser': 'A privacy focused currency with the option to create completely anonymous transactions', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'zcash'},
'ONT': {'header': 'Ontology (ONT)', 'teaser': 'Customize different public blockchains for different applications', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'ontology'},
    'ICX': {'header': 'ICON (ICX)', 'teaser': 'Hyperconnecting different blockchains without intermediary', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'icon'},
        'ZIL': {'header': 'Zilliqa (ZIL)', 'teaser': 'High throughput blockchain platform with sharding', 'img':'./assets/images/omg.png', 'link_name_on_cmc': 'zilliqa'},
    'ZRX': {'header': '0x (ZRX)', 'teaser': 'smart contract powered decentralized token exchange protocol', 'img':'./assets/images/0x.png', 'link_name_on_cmc': '0x'},
        }
// 'tem': {'header': 'tem (tem)', 'teaser': 'tem', 'img':'./assets/images/tem.png', 'link_name_on_cmc': 'tem'},

