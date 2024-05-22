import React from "react";
import styles from "./styles.css";

import { OrderForm } from "vtex.order-manager";
import { FormattedCurrency } from "vtex.format-currency";

const { useOrderForm } = OrderForm;

const MinicartInstallments = () => {
    const {
        orderForm: { totalizers },
    } = useOrderForm();

    const totalItems = totalizers.find(
        (totalizer: any) => totalizer.id === "Items"
    );

    const totalItemsValue = totalItems ? totalItems.value : 0;

    const maxInstallments = 10;

    const installmentValue = totalItemsValue / maxInstallments / 100;

    if (totalItemsValue === 0) return null;

    return (
        <div className={styles.minicartInstallmentsWrapper}>
            <p>
                {maxInstallments}x de{" "}
                <FormattedCurrency value={installmentValue} />
            </p>
        </div>
    );
};

export default MinicartInstallments;
