export interface Product {
    id:                      number;
    name:                    string;
    slug:                    string;
    permalink:               string;
    date_created:            string;
    date_created_gmt:        string;
    date_modified:           string;
    date_modified_gmt:       string;
    type:                    string;
    status:                  string;
    featured:                boolean;
    catalog_visibility:      string;
    description:             string;
    short_description:       string;
    sku:                     string;
    price:                   string;
    regular_price:           string;
    sale_price:              string;
    date_on_sale_from:       null;
    date_on_sale_from_gmt:   null;
    date_on_sale_to:         null;
    date_on_sale_to_gmt:     null;
    on_sale:                 boolean;
    purchasable:             boolean;
    total_sales:             number;
    virtual:                 boolean;
    downloadable:            boolean;
    downloads:               any[];
    download_limit:          number;
    download_expiry:         number;
    external_url:            string;
    button_text:             string;
    tax_status:              string;
    tax_class:               string;
    manage_stock:            boolean;
    stock_quantity:          number;
    backorders:              string;
    backorders_allowed:      boolean;
    backordered:             boolean;
    low_stock_amount:        null;
    sold_individually:       boolean;
    weight:                  string;
    dimensions:              Dimensions;
    shipping_required:       boolean;
    shipping_taxable:        boolean;
    shipping_class:          string;
    shipping_class_id:       number;
    reviews_allowed:         boolean;
    average_rating:          string;
    rating_count:            number;
    upsell_ids:              number[];
    cross_sell_ids:          any[];
    parent_id:               number;
    purchase_note:           string;
    categories:              Category[];
    tags:                    any[];
    images:                  Image[];
    attributes:              Attribute[];
    details?:                 Detail[];
    default_attributes:      any[];
    variations:              Variation[];
    grouped_products:        any[];
    menu_order:              number;
    price_html:              string;
    related_ids:             number[];
    stock_status:            string;
    has_options:             boolean;
    post_password:           string;
    yoast_head_json:         YoastHeadJSON;
    jetpack_sharing_enabled: boolean;
    uagb_featured_image_src: any[];
    uagb_author_info:        UagbAuthorInfo;
    uagb_comment_info:       number;
    uagb_excerpt:            string;
    _links:                  Links;
}

export interface Links {
    self:       Collection[];
    collection: Collection[];
}

export interface Collection {
    href: string;
}

export interface Attribute {
    id:        number;
    name:      string;
    slug:      string;
    position:  number;
    visible:   boolean;
    options:   string[];
}

export interface Category {
    id:   number;
    name: string;
    slug: string;
}

export interface Dimensions {
    length: string;
    width:  string;
    height: string;
}

export interface Image {
    id:                number;
    date_created:      string;
    date_created_gmt:  string;
    date_modified:     string;
    date_modified_gmt: string;
    src:               string;
    name:              string;
    alt:               string;
}

export interface UagbAuthorInfo {
    display_name: string;
    author_link:  string;
}

export interface YoastHeadJSON {
    title:                 string;
    description:           string;
    robots:                Robots;
    canonical:             string;
    og_locale:             string;
    og_type:               string;
    og_title:              string;
    og_description:        string;
    og_url:                string;
    og_site_name:          string;
    article_publisher:     string;
    article_modified_time: string;
    og_image:              OgImage[];
    twitter_card:          string;
    twitter_misc:          TwitterMisc;
    schema:                Schema;
}

export interface OgImage {
    width:  number;
    height: number;
    url:    string;
    type:   string;
}

export interface Robots {
    index:               string;
    follow:              string;
    "max-snippet":       string;
    "max-image-preview": string;
    "max-video-preview": string;
}

export interface Schema {
    "@context": string;
    "@graph":   Graph[];
}

export interface Graph {
    "@type":             string;
    "@id":               string;
    url?:                string;
    name?:               string;
    isPartOf?:           Breadcrumb;
    primaryImageOfPage?: Breadcrumb;
    image?:              Breadcrumb;
    thumbnailUrl?:       string;
    datePublished?:      string;
    dateModified?:       string;
    description?:        string;
    breadcrumb?:         Breadcrumb;
    inLanguage?:         string;
    potentialAction?:    PotentialAction[];
    contentUrl?:         string;
    width?:              number;
    height?:             number;
    itemListElement?:    ItemListElement[];
    publisher?:          Breadcrumb;
    logo?:               Logo;
    sameAs?:             string[];
}

export interface Breadcrumb {
    "@id": string;
}

export interface ItemListElement {
    "@type":  string;
    position: number;
    name:     string;
    item?:    string;
}

export interface Logo {
    "@type":    string;
    inLanguage: string;
    "@id":      string;
    url:        string;
    contentUrl: string;
    width:      number;
    height:     number;
    caption:    string;
}

export interface PotentialAction {
    "@type":        string;
    target:         TargetUnion;
    "query-input"?: string;
}

export type TargetUnion = string[] | TargetClass;

export interface TargetClass {
    "@type":     string;
    urlTemplate: string;
}

export interface TwitterMisc {
    "Est. reading time": string;
}

export interface Variation {
    id:                      number;
    name:                    string;
    slug:                    string;
    permalink:               string;
    date_created:            string;
    date_created_gmt:        string;
    date_modified:           string;
    date_modified_gmt:       string;
    type:                    string;
    status:                  string;
    featured:                boolean;
    catalog_visibility:      string;
    description:             string;
    short_description:       string;
    sku:                     string;
    price:                   string;
    regular_price:           string;
    sale_price:              string;
    date_on_sale_from:       null;
    date_on_sale_from_gmt:   null;
    date_on_sale_to:         null;
    date_on_sale_to_gmt:     null;
    on_sale:                 boolean;
    purchasable:             boolean;
    total_sales:             number;
    virtual:                 boolean;
    downloadable:            boolean;
    downloads:               any[];
    download_limit:          number;
    download_expiry:         number;
    external_url:            string;
    button_text:             string;
    tax_status:              string;
    tax_class:               string;
    manage_stock:            boolean;
    stock_quantity:          number;
    backorders:              string;
    backorders_allowed:      boolean;
    backordered:             boolean;
    low_stock_amount:        null;
    sold_individually:       boolean;
    weight:                  string;
    dimensions:              Dimensions;
    shipping_required:       boolean;
    shipping_taxable:        boolean;
    shipping_class:          string;
    shipping_class_id:       number;
    reviews_allowed:         boolean;
    average_rating:          string;
    rating_count:            number;
    upsell_ids:              number[];
    cross_sell_ids:          any[];
    parent_id:               number;
    purchase_note:           string;
    categories:              Category[];
    tags:                    any[];
    images:                  Image[];
    attributes:              Attribute[];
    default_attributes:      any[];
    variations:              number[];
    grouped_products:        any[];
    menu_order:              number;
    price_html:              string;
    related_ids:             number[];
    meta_data:               MetaDatum[];
    stock_status:            string;
    has_options:             boolean;
    post_password:           string;
    yoast_head:              string;
    yoast_head_json:         YoastHeadJSON;
    jetpack_sharing_enabled: boolean;
    uagb_featured_image_src: any[];
    uagb_author_info:        UagbAuthorInfo;
    uagb_comment_info:       number;
    uagb_excerpt:            string;
    _links:                  Links;
}

export interface Links {
    self:       Collection[];
    collection: Collection[];
}

export interface Collection {
    href: string;
}

export interface Attribute {
    id:        number;
    name:      string;
    slug:      string;
    position:  number;
    visible:   boolean;
    variation: boolean;
    options:   string[];
}

export interface Category {
    id:   number;
    name: string;
    slug: string;
}

export interface Dimensions {
    length: string;
    width:  string;
    height: string;
}

export interface Image {
    id:                number;
    date_created:      string;
    date_created_gmt:  string;
    date_modified:     string;
    date_modified_gmt: string;
    src:               string;
    name:              string;
    alt:               string;
}

export interface MetaDatum {
    id:    number;
    key:   string;
    value: ValueUnion;
}

export type ValueUnion = ValueClass | string;

export interface ValueClass {
    commission_mode?:    string;
    commission_percent?: string;
    commission_fixed?:   string;
    tax_name?:           string;
    tax_percent?:        string;
    css?:                string;
    js?:                 string;
    current_block_list?: CurrentBlockList;
    uag_flag?:           boolean;
    uag_version?:        string;
    gfonts?:             any[];
    gfonts_url?:         string;
    gfonts_files?:       any[];
    uag_faq_layout?:     boolean;
}

export interface CurrentBlockList {
    "0":  string;
    "1":  string;
    "2":  string;
    "3":  string;
    "4":  string;
    "5":  string;
    "6":  string;
    "8":  string;
    "9":  string;
    "10": string;
    "11": string;
    "12": string;
    "13": string;
    "14": string;
    "15": string;
    "16": string;
    "17": string;
}

export interface UagbAuthorInfo {
    display_name: string;
    author_link:  string;
}

export interface YoastHeadJSON {
    title:                 string;
    description:           string;
    robots:                Robots;
    canonical:             string;
    og_locale:             string;
    og_type:               string;
    og_title:              string;
    og_description:        string;
    og_url:                string;
    og_site_name:          string;
    article_publisher:     string;
    article_modified_time: string;
    og_image:              OgImage[];
    twitter_card:          string;
    twitter_misc:          TwitterMisc;
    schema:                Schema;
}

export interface OgImage {
    width:  number;
    height: number;
    url:    string;
    type:   string;
}

export interface Robots {
    index:               string;
    follow:              string;
    "max-snippet":       string;
    "max-image-preview": string;
    "max-video-preview": string;
}

export interface Schema {
    "@context": string;
    "@graph":   Graph[];
}

export interface Graph {
    "@type":             string;
    "@id":               string;
    url?:                string;
    name?:               string;
    isPartOf?:           Breadcrumb;
    primaryImageOfPage?: Breadcrumb;
    image?:              Breadcrumb;
    thumbnailUrl?:       string;
    datePublished?:      string;
    dateModified?:       string;
    description?:        string;
    breadcrumb?:         Breadcrumb;
    inLanguage?:         string;
    potentialAction?:    PotentialAction[];
    contentUrl?:         string;
    width?:              number;
    height?:             number;
    itemListElement?:    ItemListElement[];
    publisher?:          Breadcrumb;
    logo?:               Logo;
    sameAs?:             string[];
}

export interface Breadcrumb {
    "@id": string;
}

export interface ItemListElement {
    "@type":  string;
    position: number;
    name:     string;
    item?:    string;
}

export interface Logo {
    "@type":    string;
    inLanguage: string;
    "@id":      string;
    url:        string;
    contentUrl: string;
    width:      number;
    height:     number;
    caption:    string;
}

export interface PotentialAction {
    "@type":        string;
    target:         TargetUnion;
    "query-input"?: string;
}

export interface TargetClass {
    "@type":     string;
    urlTemplate: string;
}

export interface TwitterMisc {
    "Est. reading time": string;
}

export interface Detail{
    name: string;
    slug: string;
    note: string;
}

export interface ProductOrder{
    id: number;
    name: string;
    slug: string;
    count: number;
    attributes: {
        id:        number;
        name:      string;
        slug:      string;
        position:  number;
        visible:   boolean;
        options:   string[];
    }[];
}
export interface OrderAttribute
    {
        id:        number;
        name:      string;
        slug:      string;
        position:  number;
        visible:   boolean;
        options:   string[];
    }