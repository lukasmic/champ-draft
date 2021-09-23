export interface Card {
    pack_code: PackCode
    pack_name: PackName
    type_code: Type
    type_name: TypeName
    faction_code: FactionCode
    faction_name: FactionName
    card_set_code?: string
    card_set_name?: string
    card_set_type_name_code?: CardSetTypeNameCode
    linked_to_code?: string
    linked_to_name?: string
    position: number
    code: string
    name: string
    real_name: string
    text?: string
    real_text?: string
    quantity: number
    hand_size?: number | null
    health?: number | null
    health_per_hero: boolean
    thwart?: number | null
    attack?: number | null
    defense?: number | null
    base_threat_fixed: boolean
    escalation_threat_fixed: boolean
    threat_fixed: boolean
    deck_limit?: number | null
    traits?: null | string
    real_traits?: null | string
    flavor?: string
    is_unique: boolean
    hidden: boolean
    permanent: boolean
    double_sided: boolean
    octgn_id?: null | string
    url: string
    imagesrc?: null | string
    linked_card?: Card
    recover?: number | null
    set_position?: number | null
    subname?: null | string
    cost?: number | null
    resource_energy?: number | null
    thwart_cost?: number | null
    resource_physical?: number | null
    resource_mental?: number | null
    resource_wild?: number | null
    attack_cost?: number | null
    duplicated_by?: string[]
    duplicate_of_code?: string
    duplicate_of_name?: string
    deck_requirements?: DeckRequirement[] | null
    illustrator?: null | string
    base_threat?: number | null
    scheme_acceleration?: number | null
    scheme_hazard?: number | null
    boost_text?: null | string
    scheme?: number | null
    boost?: number | null
    scheme_crisis?: number | null
    deck_options?: DeckOption[] | null
    id?: number
    real_boost_text?: null
    scheme_text?: null
    attack_text?: null
    defense_cost?: null
    recover_cost?: null
    escalation_threat?: null
    threat?: null
    stage?: null
    restrictions?: null
    back_text?: null
    back_flavor?: null
    back_name?: null
    backimagesrc?: null
}

export enum CardSetTypeNameCode {
    Hero = 'hero',
    Modular = 'modular',
    Villain = 'villain'
}

export interface DeckOption {
    limit: number
    trait: string[]
    type: Type[]
}

export enum Type {
    Ally = 'ally',
    AlterEgo = 'alter_ego',
    Attachment = 'attachment',
    Event = 'event',
    Hero = 'hero',
    Minion = 'minion',
    Obligation = 'obligation',
    Resource = 'resource',
    SideScheme = 'side_scheme',
    Support = 'support',
    Treachery = 'treachery',
    Upgrade = 'upgrade'
}

export interface DeckRequirement {
    aspects: number
    limit?: number
}

export enum FactionCode {
    Aggression = 'aggression',
    Basic = 'basic',
    Campaign = 'campaign',
    Hero = 'hero',
    Justice = 'justice',
    Leadership = 'leadership',
    Protection = 'protection'
}

export enum FactionName {
    Aggression = 'Aggression',
    Basic = 'Basic',
    Campaign = 'Campaign',
    Hero = 'Hero',
    Justice = 'Justice',
    Leadership = 'Leadership',
    Protection = 'Protection'
}

export enum PackCode {
    Ant = 'ant',
    Bkw = 'bkw',
    Cap = 'cap',
    Core = 'core',
    Drax = 'drax',
    Drs = 'drs',
    Gam = 'gam',
    Gmw = 'gmw',
    Hlk = 'hlk',
    Msm = 'msm',
    Mts = 'mts',
    Nebu = 'nebu',
    Qsv = 'qsv',
    Scw = 'scw',
    Stld = 'stld',
    Thor = 'thor',
    Trors = 'trors',
    Vnm = 'vnm',
    Wsp = 'wsp'
}

export enum PackName {
    AntMan = 'Ant-man',
    BlackWidow = 'Black Widow',
    CaptainAmerica = 'Captain America',
    CoreSet = 'Core Set',
    DoctorStrange = 'Doctor Strange',
    Drax = 'Drax',
    GalaxySMostWanted = "Galaxy's Most Wanted",
    Gamora = 'Gamora',
    Hulk = 'Hulk',
    MSMarvel = 'Ms. Marvel',
    Nebula = 'Nebula',
    Quicksilver = 'Quicksilver',
    ScarletWitch = 'Scarlet Witch',
    StarLord = 'Star-Lord',
    TheMadTitanSShadow = "The Mad Titan's Shadow",
    TheRiseOfRedSkull = 'The Rise of Red Skull',
    Thor = 'Thor',
    Venom = 'Venom',
    Wasp = 'Wasp'
}

export enum TypeName {
    Ally = 'Ally',
    AlterEgo = 'Alter-Ego',
    Attachment = 'Attachment',
    Event = 'Event',
    Hero = 'Hero',
    Minion = 'Minion',
    Obligation = 'Obligation',
    Resource = 'Resource',
    SideScheme = 'Side Scheme',
    Support = 'Support',
    Treachery = 'Treachery',
    Upgrade = 'Upgrade'
}
