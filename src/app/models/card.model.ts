export interface Card {
    pack_code: PackCode;
    pack_name: PackName;
    type_code: Type;
    type_name: TypeName;
    faction_code: FactionCode;
    faction_name: FactionName | undefined;
    card_set_code?: string;
    card_set_name?: string;
    card_set_type_name_code?: CardSetTypeNameCode;
    linked_to_code?: string;
    linked_to_name?: string;
    position: number;
    code: string;
    name: string;
    real_name: string;
    text?: string;
    real_text?: null | string;
    quantity: number;
    hand_size?: number | null;
    health?: number | null;
    health_per_hero: boolean;
    thwart?: number | null;
    attack?: number | null;
    defense?: number | null;
    base_threat_fixed: boolean;
    escalation_threat_fixed: boolean;
    threat_fixed: boolean;
    deck_limit?: number | null;
    traits?: null | string;
    real_traits?: null | string;
    meta?: Meta | null;
    flavor?: string;
    is_unique: boolean;
    hidden: boolean;
    permanent: boolean;
    double_sided: boolean;
    octgn_id?: string;
    url: string;
    imagesrc?: null | string;
    linked_card?: Card;
    recover?: number | null;
    set_position?: number | null;
    subname?: null | string;
    cost?: number | null;
    resource_energy?: number;
    thwart_cost?: number | null;
    resource_physical?: number;
    resource_mental?: number;
    resource_wild?: number;
    attack_cost?: number | null;
    duplicated_by?: string[];
    duplicate_of_code?: string;
    duplicate_of_name?: string;
    deck_requirements?: DeckRequirement[] | null;
    illustrator?: null | string;
    base_threat?: number | null;
    scheme_acceleration?: number | null;
    scheme_hazard?: number | null;
    boost_text?: null | string;
    scheme?: number | null;
    boost?: number | null;
    scheme_crisis?: number | null;
    deck_options?: DeckOption[] | null;
    back_text?: null | string;
    back_name?: null | string;
    backimagesrc?: null | string;
    id?: number;
    real_boost_text?: null;
    scheme_text?: null;
    attack_text?: null;
    defense_cost?: null;
    recover_cost?: null;
    escalation_threat?: null;
    threat?: null;
    stage?: null;
    restrictions?: null;
    back_flavor?: null;
}

export enum CardSetTypeNameCode {
    Hero = 'hero',
    Modular = 'modular',
    Villain = 'villain',
}

export interface DeckOption {
    limit: number;
    trait: string[];
    type: Type[];
}

export enum Type {
    Ally = 'ally',
    AlterEgo = 'alter_ego',
    Attachment = 'attachment',
    Environment = 'environment',
    Event = 'event',
    Hero = 'hero',
    Minion = 'minion',
    Obligation = 'obligation',
    PlayerSideScheme = 'player_side_scheme',
    Resource = 'resource',
    SideScheme = 'side_scheme',
    Support = 'support',
    Treachery = 'treachery',
    Upgrade = 'upgrade',
}

export interface DeckRequirement {
    aspects: number;
    limit?: number;
}

export enum FactionCode {
    Aggression = 'aggression',
    Basic = 'basic',
    Campaign = 'campaign',
    Hero = 'hero',
    Justice = 'justice',
    Leadership = 'leadership',
    Pool = 'pool',
    Protection = 'protection',
}

export enum FactionName {
    Aggression = 'Aggression',
    Basic = 'Basic',
    Campaign = 'Campaign',
    Hero = 'Hero',
    Justice = 'Justice',
    Leadership = 'Leadership',
    Pool = "'Pool",
    Protection = 'Protection',
}

export interface Meta {
    colors: string[];
    offset?: string;
}

export enum PackCode {
    Angel = 'angel',
    Ant = 'ant',
    Bkw = 'bkw',
    Cap = 'cap',
    Core = 'core',
    Cyclops = 'cyclops',
    Deadpool = 'deadpool',
    Drax = 'drax',
    Drs = 'drs',
    Gam = 'gam',
    Gambit = 'gambit',
    Gmw = 'gmw',
    Hlk = 'hlk',
    Ironheart = 'ironheart',
    Msm = 'msm',
    Mts = 'mts',
    MutGen = 'mut_gen',
    Nebu = 'nebu',
    NextEvol = 'next_evol',
    Nova = 'nova',
    Phoenix = 'phoenix',
    Psylocke = 'psylocke',
    Qsv = 'qsv',
    Rogue = 'rogue',
    Scw = 'scw',
    Sm = 'sm',
    Spdr = 'spdr',
    Spiderham = 'spiderham',
    Stld = 'stld',
    Storm = 'storm',
    Thor = 'thor',
    Trors = 'trors',
    Valk = 'valk',
    Vision = 'vision',
    Vnm = 'vnm',
    Warm = 'warm',
    Wolv = 'wolv',
    Wsp = 'wsp',
    X23 = 'x23',
}

export enum PackName {
    Angel = 'Angel',
    AntMan = 'Ant-Man',
    BlackWidow = 'Black Widow',
    CaptainAmerica = 'Captain America',
    CoreSet = 'Core Set',
    Cyclops = 'Cyclops',
    Deadpool = 'Deadpool',
    DoctorStrange = 'Doctor Strange',
    Drax = 'Drax',
    GalaxySMostWanted = "Galaxy's Most Wanted",
    Gambit = 'Gambit',
    Gamora = 'Gamora',
    Hulk = 'Hulk',
    Ironheart = 'Ironheart',
    MSMarvel = 'Ms. Marvel',
    MutantGenesis = 'Mutant Genesis',
    NeXtEvolution = 'NeXt Evolution',
    Nebula = 'Nebula',
    Nova = 'Nova',
    Phoenix = 'Phoenix',
    Psylocke = 'Psylocke',
    Quicksilver = 'Quicksilver',
    Rogue = 'Rogue',
    SPDR = 'SP//dr',
    ScarletWitch = 'Scarlet Witch',
    SinisterMotives = 'Sinister Motives',
    SpiderHam = 'Spider-Ham',
    StarLord = 'Star-Lord',
    Storm = 'Storm',
    TheMadTitanSShadow = "The Mad Titan's Shadow",
    TheRiseOfRedSkull = 'The Rise of Red Skull',
    Thor = 'Thor',
    Valkyrie = 'Valkyrie',
    Venom = 'Venom',
    Vision = 'Vision',
    WarMachine = 'War Machine',
    Wasp = 'Wasp',
    Wolverine = 'Wolverine',
    X23 = 'X-23',
}

export enum TypeName {
    Ally = 'Ally',
    AlterEgo = 'Alter-Ego',
    Attachment = 'Attachment',
    Environment = 'Environment',
    Event = 'Event',
    Hero = 'Hero',
    Minion = 'Minion',
    Obligation = 'Obligation',
    PlayerSideScheme = 'Player Side Scheme',
    Resource = 'Resource',
    SideScheme = 'Side Scheme',
    Support = 'Support',
    Treachery = 'Treachery',
    Upgrade = 'Upgrade',
}
