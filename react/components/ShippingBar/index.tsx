import React from "react";

// Styles
import styles from "./styles.css";
import formatPrice from "../../utils/formatPrice";
import { OrderForm } from "vtex.order-manager";

const { useOrderForm } = OrderForm;

interface ShippingBarProps {
    minValue: number;
    text: string;
    fullBarText: string;
}

const ShippingBar = ({
    minValue = 199,
    text = "Faltam $value para você conseguir *frete grátis* nesta compra.",
    fullBarText = "Você ganhou *frete grátis* nesta compra.",
}: ShippingBarProps) => {
    const { orderForm } = useOrderForm();

    const differenceToMinValue = (orderForm?.value - minValue * 100) / 100;

    console.log("values", {
        minValue,
        orderFormValue: orderForm?.value,
        differenceToMinValue,
    });

    const parseMarkdown = (text: string) => {
        return text
            ?.replace(/\*([^*]+)\*/g, "<strong>$1</strong>") // Negrito
            ?.replace(/_([^_]+)_/g, "<em>$1</em>"); // Itálico
    };

    return (
        <div className={styles.shippingBarWrapper}>
            <div
                className={styles.shippingBarText}
                dangerouslySetInnerHTML={{
                    __html:
                        differenceToMinValue < 0
                            ? parseMarkdown(
                                  text.replace(
                                      "$value",
                                      formatPrice(differenceToMinValue)
                                  )
                              )
                            : parseMarkdown(fullBarText),
                }}
            ></div>

            <div className={styles.shippingBarLine}>
                <div
                    className={styles.shippingBarProgress}
                    style={{
                        width:
                            differenceToMinValue < 0
                                ? `${
                                      (orderForm?.value - minValue / 100) /
                                      minValue
                                  }%`
                                : "100%",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ShippingBar;

ShippingBar.schema = {
    title: "Barra de Frete - Configurações",
    type: "object",
    properties: {
        minValue: {
            title: "Valor mínimo",
            description: "Valor mínimo para frete grátis",
            type: "number",
            default: 200,
        },
        text: {
            title: "Texto da barra",
            description: "Texto exibido na barra de frete",
            type: "string",
            default:
                "Faltam $value para você conseguir *frete grátis* nesta compra.",
        },
        fullBarText: {
            title: "Texto da barra completa",
            description:
                "Texto exibido na barra de frete quando o valor mínimo for atingido",
            type: "string",
            default: "Você ganhou *frete grátis* nesta compra.",
        },
    },
};
