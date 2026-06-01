// TODO: Install mercadopago SDK: npm install mercadopago
// TODO: Set MERCADOPAGO_ACCESS_TOKEN in .env.local

export interface PreferenceItem {
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
  currency_id: "MXN";
}

export interface CreatePreferenceParams {
  items: PreferenceItem[];
  back_urls?: {
    success?: string;
    failure?: string;
    pending?: string;
  };
  external_reference?: string;
}

export async function createPreference(
  _params: CreatePreferenceParams
): Promise<{ id: string; init_point: string }> {
  // TODO: Implement MercadoPago Checkout Pro
  // import MercadoPagoConfig, { Preference } from "mercadopago";
  //
  // const client = new MercadoPagoConfig({
  //   accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
  // });
  //
  // const preference = new Preference(client);
  // const response = await preference.create({ body: params });
  // return { id: response.id!, init_point: response.init_point! };

  throw new Error("MercadoPago not configured yet. See lib/mercadopago.ts");
}
