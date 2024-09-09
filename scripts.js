document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('customer-form');
    const sameAsBillingCheckbox = document.getElementById('same-as-billing');

    function toggleShippingAddress() {
        if (sameAsBillingCheckbox.checked) {
            document.getElementById('shipping-address1').value = document.getElementById('address1').value;
            document.getElementById('shipping-address2').value = document.getElementById('address2').value;
            document.getElementById('shipping-city').value = document.getElementById('city').value;
            document.getElementById('shipping-state').value = document.getElementById('state').value;
            document.getElementById('shipping-country').value = document.getElementById('country').value;
            document.getElementById('shipping-postal-code').value = document.getElementById('postal-code').value;
            document.getElementById('shipping-primary-phone').value = document.getElementById('primary-phone').value;
            document.getElementById('shipping-fax').value = document.getElementById('fax').value;
            document.getElementById('shipping-contact').value = document.getElementById('contact').value;
        } else {
            document.getElementById('shipping-address1').value = '';
            document.getElementById('shipping-address2').value = '';
            document.getElementById('shipping-city').value = '';
            document.getElementById('shipping-state').value = '';
            document.getElementById('shipping-country').value = '';
            document.getElementById('shipping-postal-code').value = '';
            document.getElementById('shipping-primary-phone').value = '';
            document.getElementById('shipping-fax').value = '';
            document.getElementById('shipping-contact').value = '';
        }
    }

    sameAsBillingCheckbox.addEventListener('change', toggleShippingAddress);
    toggleShippingAddress();

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission

        // Create a FormData object from the form
        const formData = new FormData(form);

        // Convert FormData to a plain object
        const dataObject = {
            gstin: formData.get('gstin'),
            gstinType: formData.get('gstin-type'),
            businessType: formData.get('business-type'),
            pan: formData.get('pan'),
            name: formData.get('name'),
            email: formData.get('email'),
            website: formData.get('website'),
            address1: formData.get('address1'),
            address2: formData.get('address2'),
            city: formData.get('city'),
            state: formData.get('state'),
            country: formData.get('country'),
            postalCode: formData.get('postal-code'),
            primaryPhone: formData.get('primary-phone'),
            secondaryPhone: formData.get('secondary-phone'),
            fax: formData.get('fax'),
            contact: formData.get('contact'),
            genBusPostingGroup: formData.get('gen-bus-posting-group'),
            customerClassification: formData.get('customer-classification'),
            customerType: formData.get('customer-type'),
            currencyCode: formData.get('currency-code'),
            priority: formData.get('priority'),
            packingInstructions: formData.get('packing-instructions'),
            defaultLocationCode: formData.get('default-location-code'),
            paymentTerms: formData.get('payment-terms'),
            merchandisingSalesPersonName: formData.get('merchandising-sales-person-name'),
            territoryHeadName: formData.get('territory-head-name'),
            agent: formData.get('agent'),
            agentName: formData.get('agent-name'),
            agentCommission: formData.get('agent-commission'),
            shippingAddress1: formData.get('shipping-address1'),
            shippingAddress2: formData.get('shipping-address2'),
            shippingCity: formData.get('shipping-city'),
            shippingState: formData.get('shipping-state'),
            shippingCountry: formData.get('shipping-country'),
            shippingPostalCode: formData.get('shipping-postal-code'),
            shippingPrimaryPhone: formData.get('shipping-primary-phone'),
            shippingFax: formData.get('shipping-fax'),
            shippingContact: formData.get('shipping-contact')
        };


        // Convert the object to JSON
        const jsonData = JSON.stringify(dataObject);

        // Optionally, you can log the JSON data to the console
        //console.log(jsonData);

        // Send JSON data to a server
        fetch('https://customerdata-1.onrender.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {
            //console.log('Success:', data);
            const container = document.getElementsByClassName('container')[0];

                // Check if the element exists
                if (container) {
                    // Update the innerHTML of the element
                    container.innerHTML = `<h1>${data.message}</h1>`;
                } else {
                    console.error("Element with class 'Container' not found.");
                }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});