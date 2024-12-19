import React from "react";

const VendorAgreement = () => {
  return (
    <div className="w-3/4 mx-auto px-5">
      <div
        className="pl-5"
        style={{
          fontFamily: "Times New Romar",
        }}
      >
        <h4 class="headingtemplateClassName">[To be stamped]</h4>
        <h2 class="headingtemplateClassName">"VENDOR AGREEMENT"</h2>
        <div className="flex flex-row mx-4">
          <p class="textdesignClassName">This Vendor Agreement (“Agreement”)</p>
          <p className=" text-sm">
            is made and executed on this [●] day of [●], 2022 at [●]
          </p>
        </div>
        <h2 class="headingtempelateClassName">"BY AND BETWEEN"</h2>
        <div className="mx-2">
          <span className="font-bold  ">Mesky Online Private Limited,</span>
          <span class="text-sm text-start w-full ">
            a company incorporated under the provisions of Companies Act 2013
            having its registered office at B-205, Raj Mahal C.H.S. Ltd, Raheja
            Complex Yaari Road, Versova, Andheri West Mumbai, Maharashtra, Pin -
            400058 hereinafter referred to as
          </span>
          <span className="font-bold mx-1  ">"Mesky"</span>
          <span class="spandesignClassName">
            which expression shall unless repugnant to the subject or context
            thereof mean and include its affiliates,successors and permitted
            assigns of the
          </span>
          <span className="font-bold p-1 ">ONE PART;</span>
        </div>
        <h2 class="headingtemplateClassName">"AND"</h2>
        <div className="mx-2 text-start">
          <span className="font-bold   "> [●],</span>
          <span class="text-sm text-start mx-1  w-full ">
            an entity constituted under Indian laws / company incorporated under
            the provisions of the Companies Act, 1956/2013, having its
            registered office at
          </span>
          <span className="font-bold   "> [●],</span>
          <span class="spandesignClassName">(hereinafter referred to as</span>
          <span className="font-bold "> “Vendor”</span>
          <span class="spandesignClassName">
            which expression shall unless repugnant to the subject or context
            thereof mean and include its affiliates, successors and permitted
            assigns) of the
          </span>
          <span className="font-bold p-1 ">OTHER PART;</span>
        </div>
        <div className="my-4 text-start">
          <span class="spandesignClassName">
            Mesky and Vendor shall hereinafter be individually referred to as a
          </span>
          <span className="font-bold  ">“Party”</span>
          <span class="spandesignClassName">and collectively as the</span>
          <span className="font-bold p-1 ">“Parties”. </span>
        </div>
        <h2 class="headingClassName">WHEREAS:</h2>
        <FormatPara
          num="A."
          text={` Mesky is engaged in the business of providing a Platform (as defined hereinbelow) by the name of
www.mesky.in and mobile application and other owned websites wherein various products of
different nature are marketed and sold using electronic medium. `}
        />
        <FormatPara
          num="B."
          text={` The Vendor is engaged in the business of manufacturing/importing/selling/distributing certain
products, the details and description of the products and similar items are more fully detailed in
Schedule I (“Products”). `}
        />
        <FormatPara
          num="C."
          text={` ursuant to mutual discussion, the Parties have decided that it will be mutually beneficial that the
Vendor lists and sells its Products through the Platform of MeskY. `}
        />
        <FormatPara
          num="D."
          text={` The Parties are now desirous of entering into this Agreement for the purpose of recording the
rights and obligations inter se the Parties. `}
        />

        <div className="text-start mx-2">
          <span className="font-bold"> NOW THEREFORE,</span>
        </div>
        <div className="1 class">
          <div className="font-bold my-4">1. &ensp;&ensp;&ensp; DEFINITION</div>
          <div className="mx-10">
            In this Agreement, unless the context otherwise requires, the
            following words and expressions shall bear the meanings as ascribed
            to them below-:
          </div>
          <FormatPara
            num="1.1."
            text={`“Affiliate” of a person (the “Subject Person”) means: (i) in the case of any Subject Person other than a
natural person, any other person that, either directly or indirectly through one or more intermediate
persons, Controls, is Controlled by or is under common Control with the Subject Person; and (ii) in the
case of any Subject Person that is a natural person, a person who is Controlled by or is under common
Control with the Subject Person, or a Relative (as defined in the Companies Act, 2013) of such Subject
Person.
.`}
          />
          <FormatPara
            num="1.2."
            text={`“Applicable Law” shall mean any laws, bye-laws, statutes, rules, regulations, subordinate legislation,
orders, ordinances, notices, notifications, directions, restrictions, common law, judgments, decrees,
circulars, decisions, or other requirements or directives of any Governmental Authority or any
individual, partnership, corporation, company, unincorporated organization, association, trust, or other
entity acting under the authority of any Governmental Authority, as well as any protocols, policies,
codes, guidelines, standards, resolutions and guidance notes, and any interpretation of any of the
foregoing by a Governmental Authority that has the force of law in India.`}
          />
          <FormatPara
            num="1.3."
            text={`“Brand Name” shall mean “Mesky” or such other successor or replacement brand name / trade mark /
service mark as may be decided by Mesky.`}
          />
          <FormatPara
            num="1.4."
            text={`“Commercial Terms” shall have the meaning ascribed to it in Clause 4.1 below.`}
          />
          <FormatPara
            num="1.5."
            text={`“Commission” shall mean a fee on every eligible Order placed on the Platform, at such rates as
prescribed in Schedule II of this Agreement.`}
          />
          <FormatPara
            num="1.6."
            text={`“Confidential Information” shall mean and includes any and all information which is confidential to a
Party including any (i) business information and business processes, (ii) any samples, formulations,
specifications, data relating to Product manufacturing and quality control processes and procedures, (iii)
advertising and marketing plans, (iv) technical, marketing, financial and commercial information
whether relating to past or current or future, (vi) the commercial and business affairs of a Party, (vi) all
Customer related information including any rates and discounts, and (vii) and with respect to the Mesky
shall include the Customer Database`}
          />
          <FormatPara
            num="1.7."
            text={`“Control” shall have the meaning set out in Section 2(27) of the Companies Act, 2013, and the terms “
Controlled” by or “under common Control” with shall have corresponding meanings`}
          />
          <FormatPara
            num="1.8."
            text={`“Customer” shall mean the any person who places an Order with the Vendor through the Platform for
the purchase of the Products of the Vendor listed on the Platform`}
          />
          <FormatPara
            num="1.9."
            text={`“Customer Database” shall mean all data/information (as may be updated from time to time) about the
Customers or users of the Platform including their names, addresses, contact details, queries, orders and
other requests made available by such persons/entities on the Platform or otherwise captured by the
Platform that shall further include the usage, behaviour, trends and other statistical information/data
relating to such persons/entities, who (i) access the Platform or otherwise get invitation to the Platform
or correspond with the Platform, (ii) place any order for Products on the Platform, or (iii) send any
enquiry/ request with respect to the Platform, and shall include all analysis and records based on such
aforementioned information, including the spending and other patterns of such persons/entities and
Products, or (iv) all Content posted, transmitted, uploaded or otherwise made available on the Platform
by the Customer or the avoidance of doubt, any derivative work from the Customer shall be deemed to
be included in the Customer Database`}
          />
          <FormatPara
            num="1.10."
            text={`“Governmental Authority” means any nation, government, state or any other political subdivision
thereof;   any   entity,   authority   or   body   exercising   executive,   legislative,   judicial,   regulatory   or
administrative functions of or pertaining to government, including any government authority, agency,
department, board, commission or instrumentality of India or any other jurisdiction, as applicable, or
any political subdivision thereof or any other applicable jurisdiction or any court, tribunal or arbitrator`}
          />
          <FormatPara
            num="1.11."
            text={`“IPR” shall mean intellectual property rights and includes ideas, concepts, creations, discoveries,
inventions, improvements, know how, trade or business secrets; trademarks, service marks, domain
names, designs, utility models, tools, devices, models, methods, patents, copyright (including all
copyright in any designs and any moral rights), masks rights, design right, procedures, processes,
systems, principles, algorithms, works of authorship, flowcharts, images, illustrations, audio clips, and
video clips, formulas, electronic codes, proprietary techniques, research projects, and other confidential`}
          />
          <FormatPara
            num="1.12."
            text={`“Online Store” shall mean a virtual electronic store created on the Platform for sale of the Vendor’s
Products to the Customers`}
          />
          <FormatPara
            num="1.13."
            text={`“Order” shall mean a final purchase order placed by a Customer with the Vendor through the Platform
for the purchase of the Product. `}
          />
          <FormatPara
            num="1.14."
            text={` “Payment Processing Fees” shall mean such fees as specified in the Commercial Terms listed out in
Schedule II of this Agreement`}
          />
          <FormatPara
            num="1.15."
            text={` “Platform” shall mean internet based electronic platform in the form of an intermediary to facilitate sale
and purchase of Products listed on Mesky’s proprietary website www.mesky.in and through its mobile
application`}
          />
          <FormatPara
            num="1.16."
            text={` “Return Shipping Fees” shall mean such fees as specified in the Commercial Terms listed out in
Schedule II of this Agreement`}
          />
          <FormatPara
            num="1.17."
            text={` Sale Value” with respect a Product means price of such Product at which such Product is sold by the
Vendor to the Customer through the Platform`}
          />
          <FormatPara
            num="1.18."
            text={` “Shipping Fees” shall mean such fees as specified in the Commercial Terms listed out in Schedule II of
this Agreement`}
          />
          <FormatPara
            num="1.19."
            text={`“Products” shall have the meaning assigned to such term in Recital B of this Agreement. `}
          />
          <FormatPara
            num="1.20."
            text={`“Services” shall mean developing and operating e-commerce businesses for Vendors and manufacturers
and providing them with proprietary technology, website design and development capabilities, order
processing capabilities, listing services, marketing services, customer service capabilities, logistics
support services and payment management services to enable sale and purchase of diverse range of
Products on the Platform. `}
          />
          <div className="2 class">
            <div className="font-bold my-4">
              2. &ensp;&ensp;&ensp; INTERPRETATION
            </div>

            <FormatPara
              num="2.1"
              text={`Heading and bold typeface are only for convenience and shall be ignored for the purpose of
interpretation.`}
            />
            <FormatPara
              num="2.2"
              text={`Unless the context of this Agreement otherwise requires (i) words using the singular or plural number
also include the plural or singular number, respectively; (ii) the terms “hereof”, “herein”, “hereby”,
“hereto” and derivative or similar words refer to this entire Agreement or specified Clauses of this
Agreement, as the case may be; (iii) the term “Clause” or “Schedule” refers to the specified Clause or
Schedule of this Agreement, unless otherwise stated in this Agreement; (iv) references to Applicable
Law shall include references to any such Law as it may, after the date hereof, from time to time, be
amended, supplemented or re-enacted, and shall include any subordinate legislation made from time to
time under that provision; (v) reference to “include” “including” shall be construed without limitation;
and (vi) references to any document, agreement or contract are to that document, agreement or contract
as amended, modified or supplemented from time to time in accordance with its terms.`}
            />
          </div>
          <div className="3 class">
            <div className="font-bold my-4">
              3. &ensp;&ensp;&ensp;BUSINESS ARRANGEMENT
            </div>
            <div className="font-bold my-3">
              3.1. &ensp;&ensp;Vendor Registration for setting up Online Store
            </div>

            <FormatPara
              num="3.1.1."
              text={`Mesky shall offer to the Vendor its Services for setting up an Online Store on the Platform for listing the Vendor’s Product(s). After submission of details such as name, registered address, phone number and e- mail ID on the Platform, the Vendor shall be provided with a unique identity and password, which shall be used to log in to the Platform. 
              The Vendor hereby agrees that it shall take all necessary measures to ensure that the account is accessed by authorized personnel only.`}
            />
            <FormatPara
              num="3.1.2."
              text={`The Vendor shall also be required to separately submit to Mesky the following documents and information: (a) true and correct relevant ‘Know Your Customer (“KYC”) documents; and (b) true and correct details as per the registration form available at https://forms.gle/uBefkENNDuE8wy3x6. If the Vendor has not obtained the registration under goods and service tax (“GST”), such Vendor shall be required to provide an additional declaration as per Schedule III of this Agreement.
The vendor shall actively inform Mesky with respect to updating new information or any change to the existing information available with Mesky, within 15 (fifteen) days of receipt of such information by the Vendor.
`}
            />
            <FormatPara
              num="3.1.3."
              text={`The registration of the Vendor is 
              conditional upon the successful completion of the KYC process and verification of the Vendor’s identity and bank account details by Mesky.`}
            />
          </div>
          <div className="3 class">
            <div className="font-bold my-4">
              3.2. &ensp;&ensp;&ensp; Product Listing
            </div>

            <FormatPara
              num="3.2.1."
              text={`The Vendor shall, upon the creation of Online Store, upload the Product description, details, images,
texts, graphics, disclaimer, delivery time lines, price and such other details as required under the
Applicable Law for the Product(s) (“Product Details”) to be displayed and offered for sale through the
Platform. The Vendor shall ensure that:`}
            />
            <div className="my-2 mx-12  ">
              (a) the Products Details are accurate, true and consistent with
              the actual characteristics, access and usage conditions of the
              Products and shall update the Product Details on the Platform from
              time to time;
            </div>
            <div className="my-2 mx-12 ">
              (b) the Products as well the Product Details are not unlawful,
              dangerous, illegal, objectionable, obscene, vulgar, opposed to
              public policy, prohibited under the Applicable Laws or is in
              violation of IPR of any third party. An indicative list of
              Products which are prohibited for listing on the Platform is
              provided available at www.mesky.in/#/prohibitedProducts; and
            </div>
            <div className="my-2 mx-12">
              (c) the listed Product are listed in appropriate category on the
              Platform.
            </div>

            <FormatPara
              num="3.2.2."
              text={` Vendor shall be solely responsible for (a) the quality, quantity, statement, descriptions, images, claims,
sufficiency, originality, merchantability, legitimacy, authenticity, guarantee, warranties and other
content in respect of the Product(s) listed and offered for sale by the Vendor through the Online Store,
and (b) any claim made by the Customer pursuant to use of the Product. Any problem, issue, damage or
defect including manufacturing defect, relating to any of the Products shall be to the sole account of the
Vendo`}
            />
            <FormatPara
              num="3.2.3."
              text={` The Vendor shall not sell any Product to a third Person, or list such Product on the platform of any third
Person, at a price (i.e. maximum retail price) lower than the price (i.e. maximum retail price) mentioned
on the Platform for such Product. `}
            />
            <FormatPara
              num="3.2.4."
              text={` The price of the Product(s) shall be decided by the Vendor and shall not breach any Applicable Laws in
this regard, including but not limited to the maximum retail price of the Product(s). `}
            />
            <FormatPara
              num="3.2.5."
              text={` Mesky shall have sole right with respect to the following: `}
            />
            <div className="my-2 mx-12">
              (a) deciding category(ies) and sub-category(ies) of the Products
              which shall be listed over the Platform by the Vendor and taking
              decisions to remove/block/delete any Product Details without any
              prior intimation to Vendor in the event such Products Details
              found to be in violation of Applicable Law or breach of any of the
              terms of this Agreement
            </div>
            <div className="my-2 mx-12">
              (b) deciding design, look and feel, architecture, layout,
              positioning and all aspects of the Platform including listing,
              positioning, indexing, placement and tiering the Products offered
              for sale on the Platform by the Vendor and the Vendor shall not
              question or dispute such exercise of right or discharge of
              responsibility by Mesky.
            </div>
          </div>
          <div className="3 class">
            <div className="font-bold">
              3.3. &ensp;&ensp;&ensp; Inventory Management
            </div>

            <FormatPara
              num="3.3.1."
              text={`The Vendor shall always ensure that:`}
            />
            <div className="mx-12  ">
              (a) the Products listed on the Platform are always available in
              its inventory when the Order for any of them is placed by the
              Customer; if any Product is temporarily unavailable, the Vendor
              shall mark such Product unavailable on the Platform. The Vendor
              shall delist the Products which are permanently unavailable with
              the Vendor.
            </div>
            <div className=" mx-12 ">
              (b) the Products listed on the Platform are available in good
              condition;
            </div>
            <div className=" mx-12">
              (c) the Vendor is sole owner of the Products listed on the
              Platforms and it has all legal rights in the Products that are
              offered for sale on the Online Store, and such Products are not
              subject to any encumbrances
            </div>
            <div className="mx-12">
              (d) it complies with all Applicable Laws and shall ensure that the
              Products are in compliance with the standards prescribed for such
              Products under the Applicable Laws
            </div>

            <FormatPara
              num="3.3.2."
              text={`The Vendor shall not print, emboss or otherwise display any brand name, trade name, and intellectual
property on the Product and on the packing material other than those displayed while making the sale
offer on the Platform`}
            />
            <FormatPara
              num="3.3.3."
              text={`The Vendor shall display the logo and tag line of Mesky on the secondary packaging (i.e. packaging
carton boxes, tapes etc.) of the Product, as decided by Mesky at its sole discretion. Mesky shall provide
to the Vendor with all the packaging materials in respect of branding of Mesky`}
            />
          </div>
          <div className="3 class">
            <div className="font-bold">
              3.4. &ensp;&ensp;&ensp; Placing of order and invoicing
            </div>

            <FormatPara
              num="3.4.1."
              text={`The Parties hereby agree that once an Order is placed by the Customer for purchase of a Product
available on the Platform, the Vendor shall be under an obligation to deliver such Product to the
Customer as per the terms of this Agreement`}
            />
            <FormatPara
              num="3.4.2."
              text={`In the case of an Order placed by the Customer to Purchase a Product through the Platform, Mesky shall
facilitate raising of an invoice with the details of the Vendor and the Customer specified in such invoice.
An invoice shall contain such particulars as required under the Applicable Laws including laws relating
to GST. A copy of the invoice shall be sent to the Vendor to enable the dispatch of the Product`}
            />
            <FormatPara
              num="3.4.3."
              text={`In order to process payments made by the Customers for placing an Order and to provide the payment
services, Mesky shall reasonably maintain appropriate contracts with payment gateways and shall
comply with the Applicable Laws`}
            />
          </div>
          <div className="3 class">
            <div className="font-bold my-4">
              3.5. &ensp;&ensp;&ensp; Dispatch of Order and Logistics
            </div>
            <FormatPara
              num="3.5.1."
              text={`The Vendor shall dispatch the Product(s) of same description, quality and quantity and price as are
described and displayed on the Online Store and for which the Customer has placed the Order`}
            />
            <FormatPara
              num="3.5.2."
              text={`The Vendor agree that all logistics including but not limited to shipping, delivery, return and refund
shall be carried out only through the delivery partner engaged by Mesky (“Delivery   Partner”).
Delivery Partner would collect the Product(s) from the warehouse/facility of the Vendor based upon the
instructions provided by the Vendor and deliver to the Customer's address. Once an Order is placed by
the Customer, the Vendor shall dispatch the Products within the Dispatch Timeline as specified in Schedule II. The Vendor shall mark the Order as dispatched within 1 (one) hour from the time of pick-up
of such Product by the Delivery Partner. The Vendor shall be solely responsible for dispatch and
delivery of the Products to the Customers`}
            />
            <FormatPara
              num="3.5.3."
              text={`The Vendor shall use appropriate packaging to pack the Products depending on Products inherent nature
and dispatch the same through the Delivery Partner. The Vendor shall ensure that the Products
purchased by the Customer get delivered to the delivery address of the Customer. If a Product ordered is
deemed to be a missed delivery, a maximum of 3 (three) attempts shall be made by the Delivery Partner
to deliver the purchased Product to the Customer, post that the Product shall be returned to the origin
warehouse/ facility of the Vendor. If the Product is not delivered to the Customer and returned to the
facility/warehouse of the Vendor, in such a case, the Vendor shall promptly inform Mesky the receipt of
returned Product by the Vendor due to unsuccessful delivery of the Product.`}
            />
            <FormatPara
              num="3.5.4."
              text={`The Vendor agrees and acknowledges that the legal title, rights and ownership in the Products shall only
be transferred from the Vendor to the Customer upon delivery of the Products to the Customer and once
the return period of such Product is expired. Further, the Vendor shall solely undertake all the necessary
after sales services to the Customer including providing warranty/guarantee to the Products.`}
            />
          </div>
          <div className="4 class">
            <div className="font-bold my-4">
              4. &ensp;&ensp;&ensp; CONSIDERATION AND PAYMENT TERMS
            </div>
            <FormatPara
              num="4.1"
              text={`The Parties agree that in consideration for permitting the Vendor to sell the Products on the Platform and providing 
                Services to the Vendor, the Vendor shall pay to Mesky, a Commission in the manner as specified in the commercial terms (“Commercial Terms”)..`}
            />
            <FormatPara
              num="4.2"
              text={`In addition to the Commission, the Vendor
              shall pay to Mesky the following Fees:.`}
            />
            <div className="mx-8  ">
              (a) Payment Processing Fee as specified in the Commercial Terms
              under Schedule II of this Agreement.
            </div>
            <div className=" mx-8 ">
              (b) Shipping Fee as specified in the Commercial Terms under
              Schedule II of this Agreement. In case of return of the Product by
              a Customer, Return Shipping Fee shall also be additionally
              applicable as per the rates as specified in the Commercial Terms
              under Schedule II of this Agreement.The fees specified in
              Commercial Terms are non- refundable fees. All payments
              contemplated by this Agreement shall be made in Indian Rupees.
            </div>

            <FormatPara
              num="4.3"
              text={`The Parties agree that the charges/fees
              levied on Vendor and as covered in the Commercial Terms are
              subject to change and Mesky reserves the right to revise the same
              with prior intimation to the Vendor which can be through an e-mail
              communication on the registered e-mail address of the Vendor or
              any other mode decided from time to time.`}
            />
            <FormatPara
              num="4.4"
              text={`The Vendor shall be responsible for any tax as applicable under the Applicable Laws including taxes
relating to the Products, attributable to or incurred by the Vendor.`}
            />
            <FormatPara
              num="4.5"
              text={`Mesky shall withhold taxes/payments, if required under Applicable Law to be withheld on payments
made to the Vendor hereunder and shall be required to remit to the Vendor only the net proceeds thereof.
Mesky shall remit the taxes withheld to the appropriate Governmental Authority and agrees to provide
the Vendor, with properly executed documentation or other information or receipts or certificates
evidencing Mesky’s payment of any such tax.`}
            />
            <FormatPara
              num="4.6"
              text={`The Parties agree that once an Order is placed on the Platform as per Clause 3.4.1 hereinabove, the
consideration from the Customer shall be first received in the bank account of Mesky. Subsequently,
Mesky, after deducting applicable taxes and the fees as specified in the Commercial Terms, shall
transfer the net amount to the Vendor (“Net Amount”). Mesky shall transfer the Net Amount to the
Vendor on or before the 15th of the following month for all the Orders with respect to which the period of
return has expired in the previous month and there is no refund request pending for any of such Orders in
the previous month.`}
            />
          </div>
          <div className="5 class">
            <div className="font-bold my-4">
              5. &ensp;&ensp;&ensp; UNDERTAKINGS OF THE PARTIES
            </div>
            <div className="font-bold my-2">
              5.1 &ensp;&ensp;&ensp; Vendor Undertakings
            </div>
            <FormatPara
              num="5.1.1"
              text={` The Vendor has obtained and shall obtain and maintain all requisite rights, title, interests, licenses,
authorisations, approval and permits required under Applicable Laws to manufacture, sell and deliver
the Products; use intellectual property rights associated with its Products; and to perform its duties,
obligation and responsibilities arising or created under or pursuant to this Agreement. The Vendor shall
inform Mesky immediately of the expiration, termination, non-renewal, denial or revocation of any such
license, permit or approval including (but not limited to) labour laws, health and safety laws, food laws,
drugs and cosmetics laws and all other local legislations that may be applicable to the Vendor.`}
            />
            <FormatPara
              num="5.1.2"
              text={`All details regarding the Product(s) and price information, deals and offers related to the Product(s) are
provided by the Vendor to Mesky for inclusion on the Platform and the Vendor is solely responsible for
the accuracy of the information, validity of the prices, charges, deals, offers and other information
relating to the Product(s) offered on the Platform.`}
            />
            <FormatPara
              num="5.1.3"
              text={`The Vendor shall not incur any debt, loan or indebtedness in the name of Mesky.`}
            />
            <FormatPara
              num="5.1.4"
              text={` The Vendor undertakes that descriptions, images, and other content pertaining to Products listed on the
platform is accurate and corresponds directly with the appearance, nature, quality, purpose and other
general features of such Product.`}
            />
            <FormatPara
              num="5.1.5"
              text={`The Vendor agrees and acknowledges that it shall not – .`}
            />

            <div className="mx-12  ">
              (a) falsely represent itself as a customer or consumer and post
              reviews or comments about the Products available on the Platform,
              whether or not they are being provided by the Vendor or by any
              third party
            </div>
            <div className=" mx-12 ">
              (b) use the Services for any purpose other than as agreed under
              this Agreement; and
            </div>
            <div className=" mx-12 ">
              (c) impair, disrepute, jeopardize, invalidate, damage or be
              detrimental to the rights, reputation and goodwill associated with
              Mesky, its affiliates, shareholders or directors and/or the Brand
              Name.
            </div>
            <FormatPara
              num="5.1.6"
              text={`The Vendor hereby undertakes that Vendor shall be sole responsible for breach of undertaking and
covenants of the Vendor as specified in this Agreement including Clause 3 hereinabove, and Mesky
shall not be liable for any claim, fine, loss, damages or similar consequences arising out of such breach
in any manner whatsoever.`}
            />
            <FormatPara
              num="5.1.7"
              text={`The Vendor shall take all necessary steps to promptly address and resolve the queries of the customers
including queries with respect to Product or services.`}
            />
            <FormatPara
              num="5.1.8"
              text={`In the event of violation of any of the provisions of this Agreement by the Vendor, in addition to the
other remedies available, the following consequences, including one or more of the actions at the sole
discretion of Mesky may ensue on the Vendor:`}
            />
            <div className="mx-10 ">
              (a) freezing of the Vendor’s account with Mesky;
            </div>
            <div className=" mx-10 ">
              (b) freezing or discontinuance of any remittances to be made to
              the Vendor;
            </div>
            <div className=" mx-10 ">
              (c) discontinuation of sale of the Products;
            </div>
            <div className=" mx-10 ">
              (d) discontinuation of Services provided to the Vendor by or
              through the Platform; or
            </div>
            <div className=" mx-10 ">
              (e) de-listing of the Products from the Platform.
            </div>
          </div>
          <div className="5 class">
            <div className="font-bold my-2">
              5.2 &ensp;&ensp;&ensp; Mesky Undertakings
            </div>
            <FormatPara
              num="5.2.1"
              text={`Mesky shall reasonably maintain the Platform and its Services and shall procure adequate technology as
necessary to maintain the Platform and perform the Services under this Agreement`}
            />
            <FormatPara
              num="5.2.2"
              text={`Mesky has obtained and shall obtain and maintain all requisite rights, title, interests, licenses,
authorisations, approval and permits required under Applicable Laws, as applicable, to offer the
Services.`}
            />
            <FormatPara
              num="5.2.3"
              text={`Mesky shall not violate the intellectual property rights of any third person and shall be solely responsible
for any breach or violation of such intellectual property rights. Mesky shall not incur any debt, loan or
indebtedness in the name of the Vendor, nor use or imply any authority to use the credit of the Vendor.`}
            />
          </div>
          <div className="6 class">
            <div className="font-bold my-2">
              6. &ensp;&ensp;&ensp; PRODUCT REVIEWS AND FEEDBACK ON THE PLATFORM
            </div>
            <FormatPara
              num="6.1"
              text={`Mesky provides an option to allow Customers to share reviews, feedback, Customer experience,
comments and provide ratings on a separate section on the Platform and encourage free exchange of
ideas and observations by enabling Customer to upload Customer generated content including by way of
graphics, visual interfaces, videos, photos, logos, sounds, music, artwork and/or posting comments or
write ups on the Products purchased on the Platform (collectively, "Content"). Vendor agrees, accept
and consents to such public display of Content on the Platform relating to the Products as listed by the
Vendor on the Platform. `}
            />
            <FormatPara
              num="6.2"
              text={`All Content is considered as Customer generated content and the Parties agree that Mesky has no control
over such Content and the Content posted does not necessarily reflect Mesky’s views. The Vendor
agrees that in no event shall Mesky assume or have any responsibility or liability for any Content posted
or for any claims, damages or losses resulting from use of Content and/or appearance of Content on the
Platform.`}
            />
            <FormatPara
              num="6.3"
              text={`Vendor agrees that Mesky reserve the right to use/reproduce any Content uploaded by the Customer and
utilise the same for reasonable business purpose`}
            />
          </div>
          <div className="7 class">
            <div className="font-bold">
              7. &ensp;&ensp;&ensp; ADVERTISING AND PROMOTIONS
            </div>

            <FormatPara
              num="7.1"
              text={` Mesky provides an option to allow Customers to share reviews, feedback, Customer experience, comments and provide ratings on a separate section on the Platform and encourage free exchange of ideas and observations by enabling Customer to upload Customer generated content including by way of graphics, visual interfaces, videos, photos, logos, sounds, music, artwork and/or posting comments or write ups on the Products purchased on the Platform (collectively, "Content"). 
                Vendor agrees, accept and consents to such public display of Content on the Platform relating to the Products as listed by the Vendor on the Platform. .`}
            />
            <FormatPara
              num="7.2"
              text={`The Vendor and Mesky may agree on certain terms on which the Vendor shall support sales and marketing activities of Mesky including providing discounts on the Products or other benefits to the Customers. Further,
                 Mesky shall be entitled to offer such discount on the Products as it may deem fit and at its own cost, without obtaining the prior approval of the Vendor..`}
            />
            <FormatPara
              num="7.3"
              text={`The Parties agree that Mesky shall be responsible at its sole discretion to sell or license any and all advertising and promotional time and space with respect to the Platform including webpages or such portions of the Platform that contains the details of the Products of the Vendor. 
                The Parties agree that Mesky shall be entitled to retain any and all revenues generated from any sales or licenses of all such advertisements and promotions.`}
            />
            <FormatPara
              num="7.4"
              text={` The Parties agree that Mesky may at its sole discretion authorize the Vendor by written consent to use the Brand Name from time to time. The Vendor thus agrees and acknowledges to only use the Brand Name as per the specific instructions and only for such purposes as may be specified by Mesky and for no other reason..`}
            />
          </div>
          <div className="8 class">
            <div className="font-bold">
              8. &ensp;&ensp;&ensp; REPRESENTATIONS AND WARRANTIES
            </div>

            <FormatPara
              num="8.1"
              text={` Each Party (with respect to itself) represents and warrants to the other Party hereto that: `}
            />
            <div className="mx-8 ">
              (a) it is duly organised, validly existing and in good standing
              under the Applicable Laws of India
            </div>
            <div className=" mx-8">
              (b) it has full power and authority to enter into the Agreement
              and perform its obligations hereunder;
            </div>
            <div className=" mx-8 ">
              (c) neither the execution and delivery of this Agreement, the
              consummation of the transactions contemplated hereby, or the
              fulfilment of or compliance with the terms and conditions of this
              Agreement, conflict with its constitutional documents or
              agreements executed with third parties or Applicable Laws;
            </div>
            <div className=" mx-8 ">
              (d) all statements made as representations and warranties herein
              are true and accurate and do not omit to state anything that
              renders such representations or warranties misleading; and
            </div>
            <div className=" mx-8 ">
              (e) there are no actions, suits or proceedings commences against
              it before any court or governmental authority which would
              materially affect its ability to enter into this Agreement and to
              consummate the transactions contemplated herein
            </div>
            <FormatPara
              num="8.2"
              text={` In addition to the aforesaid, the Vendor hereby additionally represents and warrants to the Vendor that: `}
            />
            <div className=" mx-8 ">
              (a) it has the necessary expertise and resources to carry out its
              obligations hereunder and there is no restriction, bar, constraint
              or prohibition on its carrying out the same; and
            </div>
            <div className=" mx-8 ">
              (b) it is in compliance with Applicable Laws and all consents,
              permissions, approvals, authorisations, orders, registrations or
              qualifications of, or with, any court or Governmental Authority
              having jurisdiction over the Vendor, have been duly obtained and
              are valid and shall be kept current, valid and fully operational
              during the Term including but not limited to the Food Safety and
              Standards Act, 2006 and Drugs and Cosmetics Act, 1940, Consumer
              Protection Act, 2019 and data protection laws.
            </div>
          </div>
          <div className="9 class">
            <div className="font-bold my-4">
              9. &ensp;&ensp;&ensp; INDEMNITY AND LIMITATION OF LIABILITY
            </div>

            <FormatPara
              num="9.1"
              text={` The Vendor shall promptly on demand indemnify, defend and hold harmless Mesky, its affiliates and the Customer and their respective officers, directors, proprietors, partners, managers, members, trustees, shareholders, employees and agents (“Indemnified Parties”) for nd against any or all claims,liabilities, costs and expenses 
                (including reasonable attorney’s fees) incurred or to be incurred by the Indemnified Parties that arise out of, in any way relate to, or result from:: `}
            />
            <div className="mx-8 ">
              (a) any breach by the Vendor of any of the provisions of this
              Agreement including any covenant, &ensp;&ensp;&ensp; undertaking
              or other agreement or obligation contained in this Agreement;
            </div>
            <div className=" mx-8">
              (b) any misrepresentation, inaccuracy in, or any breach of, any
              representation and warranty of the Vendor;
            </div>
            <div className=" mx-8 ">
              (c) breach of any Applicable Laws by the Vendor, or negligence,
              fraud or willful misconduct of the Vendor or its affiliates and
              their respective officers, directors, shareholders, employees,
              contractors, subcontractors, agents and personnel;
            </div>
            <div className=" mx-8 ">
              (d) death, injury, loss or damage to person or loss or damage to
              property, resulting or claimed to result in whole or in part from
              any actual or alleged use or storage of Products, including but
              not limited by reason of (i) any actual or alleged failure to
              provide adequate warnings, labelling or instructions, (ii) any
              actual or alleged improper manufacture of Products, (iii) any
              actual or alleged failure of Products to comply with
              specifications or with any express or implied warranties; or (iv)
              negligence on part of the Vendor;
            </div>
            <div className=" mx-8 ">
              (e) any liability arising from any third person claims.
            </div>
          </div>
          <div className="10 class">
            <div className="font-bold my-4">
              10. &ensp;&ensp;&ensp; INTELLECTUAL PROPERTY RIGHT
            </div>

            <FormatPara
              num="10.1"
              text={` Mesky is the absolute owner and has valid interest in and rights to the Brand Name, its IPR, Content,
Customer Database and the Platform. Vendor agrees that all goodwill in or associated with the Brand
Name, including any goodwill generated or arising by or through the Services or the Vendor’s activities
pursuant to this Agreement shall accrue for the sole benefit of and shall belong exclusively to Mesky.
Thereby, no right or interest in the Brand Name are granted or deemed to be granted by Mesky to the
Vendor except unless expressly permitted in accordance with the terms of this Agreement: `}
            />
            <FormatPara
              num="10.2"
              text={` The Vendor is the absolute owner, valid licensee or authorised user (as the case may be) of its IPR. The
Vendor hereby grants to the Company royalty free license to use, print, upload, publish, re-format, re-
size, publicly perform, display and distribute the IPR of the Vendor solely for the purposes specified in
this Agreement including for marketing and promotion of the Platform and Services; for internal and
external communications, documents and electronic messages; on invoice to be issued to the Customer
in print, electronic or online format, for displaying, promoting, marketing and advertisement of the
Products on the Platform or any other manner.`}
            />
            <FormatPara
              num="10.3"
              text={` To the extent Mesky’s Content contains any proprietary content or information of the Vendor, the
Vendor hereby grants a royalty-free and world-wide license to such content or information including a
right to creative derivative product of such content or information.`}
            />
          </div>
        </div>
        <div className="11 class">
          <div className="font-bold my-4">
            11. &ensp;&ensp;&ensp; PRIVACY AND DATA PROTECTION
          </div>

          <FormatPara
            num="11.1"
            text={` The Parties agree that Mesky shall be the proprietor and sole owner of the Customer Database. Mesky
shall retain all rights including all IPR in the Customer Database and no rights in or to the Customer
Database are deemed to have been granted to the Vendor, unless agreed in writing by Mesky. `}
          />
          <FormatPara num="11.2" text={` The Vendor further agrees that:.`} />
          <div className="mx-10 ">
            (a) all the Customer Database shall be treated as Confidential
            Information of Mesky for the purposes of this Agreement;
          </div>
          <div className=" mx-10">
            (b) Mesky being the owner and proprietor of the Customer Database
            shall be entitled to use, store and exploit the same in any manner
            as may be deem fit by Mesky;
          </div>
          <div className=" mx-10 ">
            (c) The Parties agree that any third party data and/or personal
            information that may be obtained or used by Vendor or their
            affiliates in connection with this Agreement shall be collected,
            used, stored and maintained according to the generally accepted data
            collection standards and Applicable Law.
          </div>
          <FormatPara
            num="11.3"
            text={` The Parties agree that any third party data and/or personal information that may be obtained or used by
Vendor or their affiliates in connection with this Agreement shall be collected, used, stored and
maintained according to the generally accepted data collection standards and Applicable Law`}
          />
        </div>
        <div className="12 class">
          <div className="font-bold my-4">
            12. &ensp;&ensp;&ensp; CONFIDENTIALITY
          </div>

          <FormatPara
            num="12.1"
            text={` Each Party may disclose to the other such Confidential Information as may be necessary to further the
performance of this Agreement `}
          />
          <FormatPara
            num="12.2"
            text={` The Party (“Receiving Party”) undertakes to the other Party (“Disclosing Party”) – `}
          />
          <div className="mx-10 ">
            (a) To keep confidential the disclosing Party’s Confidential
            Information;
          </div>
          <div className=" mx-10">
            (b) Not to disclose the Confidential Information in whole or in part
            to any other person without the disclosing Party’s prior written
            consent, except to the receiving Party’s employees, agents and sub-
            contractors involved in the performance of this Agreement on a
            confidential and need to know basis and provided that employees,
            agents and subcontractors are bound by written agreements of
            confidentiality which are at least as stringent as the provisions of
            this Agreement; and
          </div>
          <div className=" mx-10 ">
            (c) To use the Confidential Information solely in connection with
            the performance of this Agreement.
          </div>
          <FormatPara
            num="12.3"
            text={` The Parties hereby agree that provisions of Clause 12.2 of this Agreement shall not extend to
Confidential Information which –  `}
          />
          <div className="mx-10 ">
            (a) has ceased to be confidential without default on the part of the
            Receiving Party;
          </div>
          <div className=" mx-10">
            (b) has been received from a third party who did not receive it in
            confidence;
          </div>
          <div className=" mx-10 ">
            (c) the Receiving Party is required by any court, government or
            other regulatory body to disclose, but only to the extent required
            by law, provided that the receiving Party gives the disclosing Party
            written notice as soon as practicable of such requirement and
            consult in good faith the disclosing party on the content and manner
            of any disclosure
          </div>
          <FormatPara
            num="12.4"
            text={` Upon request by the Disclosing Party, the Receiving Party must deliver to the Disclosing Party all
documents and other materials in any medium in its possession or control which contain or refer to the
Disclosing Party’s Confidential Information. If the documents or other materials are not capable of
being returned, the Receiving Party must destroy and certify the destruction of such documents and
materials to the reasonable satisfaction of the Disclosing Party  `}
          />
        </div>

        <div className="13 class">
          <div className="font-bold my-4">
            13. &ensp;&ensp;&ensp; TERM AND TERMINATION
          </div>

          <FormatPara
            num="13.1"
            text={` The Term of this Agreement shall commence on the date of execution of this Agreement and shall
continue until the termination of the Agreement as per the provisions of this Clause. `}
          />
          <FormatPara
            num="13.2"
            text={` Either Party shall have the right to terminate this Agreement by issuing a 30 (thirty) day prior notice of
termination in writing. `}
          />
          <FormatPara
            num="13.3"
            text={` Either Party shall have a right to terminate this Agreement upon any breach of this Agreement by the
other Party provided that where in the reasonable opinion of the non-breaching Party, such breach is
capable of cure, the non-breaching Party shall not terminate this Agreement thereto without providing
the breaching Party a cure period of 30 (thirty) to cure such breach and provide the non-breaching Party
with necessary documents satisfactorily evidencing cure of such breach. `}
          />
          <FormatPara
            num="13.4"
            text={` In addition to Clause 13.3, this Agreement may be terminated by Mesky in the event of: `}
          />
          <div className="mx-10 ">
            (a) if a petition for insolvency or liquidation is filed against the
            Vendor;
          </div>
          <div className=" mx-10">
            (b) if the Vendor fails to provide good quality Products to the
            Customer;
          </div>
          <div className=" mx-10 ">
            (c) if the Vendor is, in the reasonable opinion of Mesky, incapable
            of fulfilling its obligations under this Agreement and has been
            placed in jeopardy;
          </div>
          <div className=" mx-10 ">
            (d) any activities conducted by the Vendor which amounts to any
            misrepresentation, or an illegal or fraudulent activity or a breach
            of trust;
          </div>
          <div className=" mx-10 ">
            (e) fraud, gross negligence and wilful misconduct by the Vendor or
            its personnel; or
          </div>
          <div className=" mx-10 ">
            (f) occurrence of a Force Majeure Event in accordance with the terms
            of this Agreement.
          </div>
          <FormatPara num="13.5" text={` Consequences of termination:`} />
          <div className="mx-10 ">
            (a) in the event of termination/expiry of this Agreement, Mesky
            shall de-active the Online Store and shall discontinue display of
            the Products on Online Store with immediate effect and Mesky shall
            not be liable for any loss or damages (direct, indirect or
            inconsequential) incurred by the Vendor by virtue of termination of
            this Agreement.
          </div>
          <div className=" mx-10">
            (b) upon expiry or termination of this Agreement all Confidential
            Information and any other materials which may have been provided by
            one Party to the other shall be forthwith returned and the returning
            Party shall certify such return and all copies thereof or any other
            material or information which cannot be returned, shall be destroyed
            completely;
          </div>
          <div className=" mx-10 ">
            (c) termination or expiry of this Agreement shall not relieve any
            Party of any of its obligations or liabilities and affect the rights
            and remedies of a Party, which have accrued prior to the date of
            termination; and
          </div>
          <div className=" mx-10 ">
            (d) termination or expiry of this Agreement shall not affect any
            obligations or duties of the Vendor and Mesky towards Customer which
            obligations or duties accrued before the termination of this
            Agreement.
          </div>
          <div className=" mx-10 ">
            (e) During the period under notice, the Parties shall be bound to
            perform its obligations incurred under this Agreement and this
            sub-clause shall survive the termination of the Agreement.
          </div>
        </div>
        <div className="14 class">
          <div className="font-bold my-4">
            14. &ensp;&ensp;&ensp; DISPUTE RESOLUTION, GOVERNING LAW AND
            JURISDICTION
          </div>

          <FormatPara
            num="14.1"
            text={` Any disputes, differences, claims and questions between the Parties hereto arising out of this Agreement
or in any way relating hereto or any term, condition or provision herein mentioned or the construction or
interpretation thereof or otherwise in relation hereto (“Dispute”) shall be resolved by amicable
negotiations between the Parties within 30 (thirty) days of written notice of the existence of such
Dispute. If the Dispute is not resolved amicably between the Parties, the Dispute shall be referred for mediation/ conciliation to an individual or institution comprising of an individual with appropriate
qualification or repute and business understanding as the Parties mutually determine in good faith`}
          />
          <FormatPara
            num="14.2"
            text={` If the Dispute has not been settled pursuant to the aforementioned mediation, such Dispute shall
thereafter be referred to a single arbitrator in Mumbai and finally resolved by arbitration in accordance
with the Arbitration Rules of the Mumbai Centre for International Arbitration Rules (“MCIA Rules”),
which rules are deemed to be incorporated in this Agreement by reference in this Clause. `}
          />
          <FormatPara
            num="14.3"
            text={` A sole arbitrator shall be appointed within 15 (fifteen) days of reference to arbitration. The arbitrator
shall make an award in writing within 180 (one hundred eighty) days of the appointment of the
arbitrator. The award of the arbitrator shall be final, conclusive and binding upon the Parties and non-
appealable to the extent permitted by applicable law. `}
          />
          <FormatPara
            num="14.4"
            text={`This Agreement and its performance as also the arbitration agreement incorporated herein shall be
governed by and construed in all respects in accordance with the laws of India and the courts of Mumbai,
India, shall have exclusive jurisdiction. `}
          />
        </div>

        <div class="15 class">
          <div class="font-bold">15. &ensp;&ensp;&ensp;MISCELLANEOUS</div>
          <div class="font-bold my-3">
            15.1. &ensp;&ensp;Notices and Correspondences
          </div>
          <div class="flex space-x-3 my-3">
            <div>15.1.1.</div>
            <div>
              Any notice required or permitted shall be effective only if it is
              in writing and shall be deemed received by the Party to which it
              is sent (i) upon delivery when delivered by hand; or (ii) 3
              (three) days after being sent, if sent with all sending expenses
              prepaid, by an express courier with a reliable system for tracking
              delivery; or (iii) upon the delivery of the e-mail; or (iv) when
              transmitted, if sent by confirmed facsimile; or (v) 5 (five) days
              after the date sent, if sent by certified or registered mail,
              postage prepaid, return receipt requested, addressed as follows:
            </div>
          </div>
          <div>
            <table
              class="commercial-table"
              className="w-full p-2 flex flex-col mx-4 justify-between items-center"
            >
              <tbody>
                <thead>
                  <tr className=" border  border-2 bg-gray-300 border-lightgray-900 gap-6">
                    <th class="font-bold" colspan="2">
                      If to the Vendor.
                    </th>
                    <th class="font-bold" colspan="2">
                      If to Mesky Online Private Limited
                    </th>
                    <th></th>
                  </tr>
                </thead>

                <tr className="  border border-2 border-lightgray-900">
                  <td class="">Attention:</td>
                  <td class="">[●]</td>
                  <td class="">Attention:</td>
                  <td class="">[●]</td>
                </tr>
                <tr className=" border border-2 border-lightgray-900">
                  <td class="">Address:</td>
                  <td class="">[●]</td>
                  <td class="">Address:</td>
                  <td class="">
                    B-205, Raj Mahal C.H.S. Ltd, Raheja Complex Yaari Road,
                    Versova, Andheri West Mumbai, Maharashtra, Pin - 400058.
                  </td>
                </tr>
                <tr className=" border border-2 border-lightgray-900">
                  <td class="">Email:</td>
                  <td class="">[●]</td>
                  <td class="">Email:</td>
                  <td class="">legal@mesky.com.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex space-x-3 my-3">
            <div>15.1.2.</div>
            <div>
              When the Vendor uses the Platform or sends emails or other data,
              information or communication to Mesky, the Vendor agrees and
              understands that the Vendor is communicating with Mesky through
              electronic records and the Vendor consents to receive
              communications via electronic records from Mesky periodically and
              as and when required. Mesky shall communicate with the Vendor by
              email at the designated electronic mail address provided by the
              Vendor at the time of execution of this Agreement.
            </div>
          </div>

          <div class="font-bold my-3">15.2. &ensp;&ensp;Assignment</div>
          <div class="sub-text mx-12">
            The Vendor shall not assign any of its rights, obligations or
            responsibilities under this Agreement without the prior written
            consent of Mesky and in absence of such consent any such assignment
            shall be null and void. All terms and conditions of this Agreement
            shall be binding upon and shall inure to the benefit of the Parties
            hereto and their successors and authorized assignees. The Vendor
            understands, acknowledges and agrees that Mesky may subcontract one
            or more of the Services to any third party including Affiliates.
          </div>

          <div class="font-bold my-3">
            15.3. &ensp;&ensp;Waiver and Amendment
          </div>
          <div class="flex space-x-3 my-3">
            <div>15.3.1.</div>
            <div>
              No waiver of any breach of any provision of this Agreement
              constitutes a waiver of any prior, concurrent or subsequent breach
              of the same or any other provisions, and shall not be effective
              unless made in writing and signed by an authorised representative
              of the waiving Party. Each of the rights of the Parties hereto
              under this Agreement are independent, cumulative and without
              prejudice to all other rights available to them, and the exercise
              or non-exercise of any such right shall not prejudice or
              constitute a waiver of any other right of the Party, whether under
              this Agreement or otherwise.
            </div>
          </div>

          <div class="flex space-x-3 my-3">
            <div>15.3.2.</div>
            <div>
              Except as expressly set out in this Agreement, no amendment is
              binding on the Parties unless it is in writing and signed by a
              duly authorized representative of each of the Parties.
            </div>
          </div>

          <div class="font-bold my-3">15.4. &ensp;&ensp;Severability</div>
          <div class="sub-text my-3 mx-12">
            It is the intent of the Parties that in case any one or more of the
            provisions contained in this Agreement shall be held to be invalid
            or unenforceable in any respect, such provision shall be modified to
            the extent necessary to render it, as modified, valid and
            enforceable under applicable laws and such invalidity or
            unenforceability shall not affect the other provisions of this
            Agreement.
          </div>

          <div class="font-bold my-3">15.5. &ensp;&ensp;Publicity</div>
          <div class="sub-text my-3 mx-12">
            Unless otherwise expressly set forth in this Agreement, neither
            Party may issue a press release or otherwise refer to the other
            Party in any manner with respect to the Agreement or otherwise,
            without the prior written consent of such other Party.
          </div>

          <div class="font-bold my-3">15.6. &ensp;&ensp;Survival</div>
          <div class="sub-text my-3 mx-12">
            The provisions of this Agreement contained in Clause 1
            (Definitions), Clause 8 (Representations and Warranties), Clause 9
            (Indemnity and Limitation of Liability), Clause 10 (Intellectual
            Property Rights), Clause 11 (Privacy and data protection), Clause 12
            (Confidentiality), Clause 13.5 (Consequences of termination),
            Clause, 14 (Dispute Resolution) and Clause 15 (Miscellaneous) shall
            survive the expiry or early termination of this Agreement.
          </div>

          <div class="font-bold my-3">
            15.7. &ensp;&ensp;Grievance Redressal
          </div>
          <div class="sub-text my-3 mx-12">
            The Vendor shall adhere to the grievance redressal procedures
            specified under applicable law at all times and shall assist Mesky
            and the grievance officer of Mesky in the resolution and redressal
            of the grievances of the Customers with respect to such Vendor. The
            Vendor shall further provide all such support and undertake all
            actions as may be requested by Mesky for resolution of complaints
            and grievances of Customers.
          </div>

          <div class="font-bold my-3">
            15.8. &ensp;&ensp;Relationship of Parties
          </div>
          <div class="sub-text my-3 mx-12">
            Nothing in this Agreement shall be construed as creating a
            relationship of partnership, joint venture, agency or employment
            between the Parties. Mesky shall not be responsible for the acts or
            omissions of the Vendor, and Vendor shall not represent neither has,
            any power or authority to speak for, represent, bind or assume any
            obligation on behalf of Mesky.
          </div>

          <div class="font-bold my-3">15.9. &ensp;&ensp;Force Majeure</div>
          <div class="flex space-x-3 my-3">
            <div>15.9.1.</div>
            <div>
              If the performance of Mesky’s obligations hereunder is prevented,
              restricted or interfered with by reason of any pandemic or fire,
              or other casualty or accident; strike or labour disputes; war or
              other violence; or any act or condition beyond the reasonable
              control of Mesky (each a “Force Majeure Event”), then Mesky shall
              be excused from such performance to the extent of such prevention,
              restriction or interference; provided, however, that Mesky shall
              give prompt notice within a period of 10 (ten) days from the date
              of occurrence of the Force Majeure Event and providing a
              description to the Vendor of such Force Majeure Event in such
              notice, including a description, in reasonable specificity, of the
              cause of the Force Majeure Event and the likely duration of the
              impact or delay caused by the Force Majeure Event; and provided
              further that Mesky shall use reasonable efforts to avoid or remove
              such cause of non-performance and shall continue performance
              hereunder whenever such causes are removed.
            </div>
          </div>

          <div class="flex space-x-3 my-3">
            <div>15.9.2.</div>
            <div>
              If Mesky’s performance of its obligations under this Agreement is
              suspended due to the occurrence of a Force Majeure Event for a
              period in excess of 30 (thirty) days, Mesky may terminate this
              Agreement without incurring any charges.
            </div>
          </div>

          <div class="font-bold my-3">15.10. &ensp;&ensp;Counterparts</div>
          <div class="sub-text my-3 mx-12">
            This Agreement may be executed in two (2) counterparts, and each
            such counterpart shall be deemed to be an original instrument, but
            all such counterparts together shall constitute but one agreement.
          </div>

          <div class="text-center my-5">[Signature to follow]</div>

          <div class="font-bold my-3 mx-10">
            IN WITNESS WHEREOF, the Parties have executed this Agreement as of
            the day and year first above written.
          </div>

          <div class="flex justify-between mt-5 mx-10">
            <div className="font-bold">By Mesky Online Private Limited</div>
            <div className="font-bold">By [Name of the Vendor]</div>
          </div>

          <div className="mt-10 flex justify-between">
            <div>
              <div> ------------------------- </div>
              <div>Name: [●]</div>
              <div className="mt-3">Authorised Signatory </div>
            </div>
            <div>
              <div> ------------------------- </div>
              <div>Name: [●]</div>
              <div className="mt-3">Authorised Signatory </div>
            </div>
          </div>
          <div className="flex flex-col mt-12 font-bold items-center">
            <div className="bold-heading ">SCHEDULE I</div>
            <div className="bold-heading">Detail of the Products</div>

            <div className="bold-heading my-3">[To be inserted]</div>
          </div>
          <div></div>
          <div>
            <div className="flex flex-col mt-12 font-bold items-center">
              <div className="bold-heading">SCHEDULE II</div>
              <div className="bold-heading">Commercial Terms</div>
            </div>
            <div className="font-bold my-4">
              1. &ensp;&ensp;Fees and Commissions
            </div>

            <div className="mx-6">
              Mesky shall charge to the Vendor the following fee on every Order
              placed by the Customer on the Platform and confirmed by the
              Vendor, as per the rates specified hereinbelow:
            </div>

            <div
              class="commercial-table"
              className="border border-2 my-4 border-lightgray-800 "
            >
              <table>
                <thead className="border  border-lightgary-800 bg-gray-400 ">
                  <tr>
                    <th>Sr. No.</th>
                    <th>Fee Head</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Commission</td>
                    <td>
                      10% (exclusive of applicable taxes) of the Sale Value of
                      the Products sold through the Platform
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Payment Processing Fee</td>
                    <td>
                      <div>
                        On actuals
                        <br />
                      </div>
                      1.5% of the Sale Value - For UPI, Debit Card
                      <br />
                      1.85% of the Sale Value - For Credit Cards
                      (VISA/Master/Rupay), Paylater, Netbanking, Mobile Wallets
                      <br />
                      2.9% of the Sale Value - Diners and Amex Cards,
                      International Cards, EMI (Credit Card, Debit Card &
                      Cardless) & Corporate (Business) Credit Cards
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Shipping Fee</td>
                    <td>On actuals</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Return Shipping Fee</td>
                    <td>On actuals</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="">
              The fees payable by the Vendor as per the Commercial Terms shall
              be exclusive of applicable taxes
            </div>

            <div className="mt-2 ">
              2. &ensp;&ensp;The Parties hereby agree that if return rate of all
              the Orders received by the Vendor in a calendar month is less than
              5% of all such Orders (“Acceptable Limit”) received in such month,
              in such a case Vendor shall only be liable to bear the applicable
              Payment Processing Fees, Shipping Fees and Return Shipping Fees
              with respect to such rejected orders. However, in the event, the
              return rate of all the Orders received by the Vendor in a calendar
              month is above the Acceptable Limit, in such a case, (i) the
              Vendor shall pay applicable Payment Processing Fee, Shipping Fees
              and Return Shipping Fees with respect to rejected orders within
              the Acceptable Limited, and (ii) the Vendor shall also be liable
              to pay applicable Commission in addition to Payment Processing
              Fee, Shipping Fees and Return Shipping Fees on such rejected
              Orders exceeding the Acceptable Limit.
            </div>
            <div>
              <div className="font-bold mb-3 my-2">
                3. &ensp;&ensp;Dispatch Timeline
              </div>
              <div className="mx-6">
                The Vendor shall dispatch the Product(s) to the Customer within
                a period of 72 (seventy two) hours from the time of placing of
                an Order by the Customer to purchase such Product(s) (“Dispatch
                Timeline”).
              </div>
            </div>
            <div className="mt-4 ">
              4. &ensp;&ensp;In the event the Vendor fails to dispatch a Product
              (“Non-dispatched Product”) ordered by a Customer (“Ordering
              Customer”) within the Dispatch Timeline, in such an event the
              Vendor shall be responsible to pay Mesky a penalty of an amount
              equal to the Sale Value of such Non-Dispatched Product (“Penalty
              Amount”) and applicable taxes, if any. The Parties hereby agree
              that Mesky shall be entitled to offer discount coupons of an
              amount equal to the Penalty Amount to the Ordering Customer, and
              such discount coupons can be used to place further Order on the
              Platform by such Ordering Customer.
            </div>
          </div>
          <div className="pl-3">
            <div className="font-bold mt-4 text-center">SCHEDULE III</div>
            <div className="font-bold my-3 text-center">Declaration</div>
            <div className="font-bold text-center mb-3">
              (To be printed on letterhead of un-registered Vendor)
            </div>

            <span>
              We, [Name of the Vendor] bearing PAN No._____________, hereby
              declare and confirm to Mesky Online Private Limited, on whose
              Platform we shall list our Products for sale, that we have not
              obtained registration under the GST regime and our turnover is
              less than Rs. 20,00,000/-for the relevant period of GST.
            </span>
            <div className="my-2">
              In view of the above we are not authorized to levy and collect GST
              on outward supplies made by us.
            </div>
            <div> {`For < Name of the Vendor >`}</div>
            <div className="mt-3">___________________ </div>

            <div className="mt-3">Authorised Signator </div>
            <div className="mt-3">Date:__________________ </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormatPara = ({ num, text }) => (
  <div className="flex  space-x-4 my-3 ">
    <div>{num}</div>
    <div>{text}</div>
  </div>
);

export default VendorAgreement;
