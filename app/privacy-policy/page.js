'use client'
import CookieSettings from "../components/cookieSettings"
import { useState } from 'react'

export default function PrivacyPolicy() {
    const [open, setOpen] = useState(false)
    return (
        <main className="relative bg-white">
            <section className="text-black p-10 md:p-28 mx-auto max-w-7xl">
                <h1 className="text-4xl font-medium">Privacy Policy for RO Track Laying</h1>
                <p>Last updated: <b>12/19/2023</b></p>

                <br />
                <div>
                    <h2 className="text-3xl font-medium">Definitions</h2>

                    <br />
                    <div>
                        <h3 className="text-xl font-medium">"You"</h3>
                        <ul className="text-lg list-disc pl-12">
                            <li>
                                "You" refers to the individual accessing or using the Website, or Service, or the company or any other legal entity on behalf of which such individual is accessing or using the Website, or Service, as applicable.
                            </li>
                        </ul>
                    </div>
                </div>

                <br />
                <div>
                    <h2 className="text-3xl font-medium">I: General Privacy Policy</h2>

                    <br />
                    <div>
                        <h3 className="text-xl font-medium">Website Cookies</h3>
                        <ul className="text-lg list-disc pl-12">
                            <li>
                                Cookies are used to help analytics and color modes run on this site.
                            </li>
                            <li>
                                We comply with state laws such as CCPA (California), VCDPA & CDPA (Virginia), CPA (Colorado), CTDPA (Connecticut), and UCPA (Utah), as well as GDPR in Europe.
                            </li>
                            <li>
                                Users may change their cookie preferences at anytime.
                            </li>
                        </ul>
                    </div>

                    <br />
                    <div>
                        <h3 className="text-xl font-medium">Data and Files</h3>
                        <ul className="text-lg list-disc pl-12">
                            <li>
                                We do not log user activity, and any data that reaches us, including data from cookies, will not be sold.
                            </li>
                        </ul>
                    </div>
                </div>

                <br />
                <div>
                    <h2 className="text-3xl font-medium">II: Acceptance</h2>
                    <p className="text-lg">By visiting this site, You signify your agreement to the following Privacy Policy.</p>
                </div>

                <br />
                <div>
                    <h2 className="text-3xl font-medium">Contact Information</h2>
                    <p className="text-lg">
                        Users with questions or concerns can join our Discord server: <a className="text-sky-800" href="https://discord.gg/EjzW9uQVsk">RO Track Laying Discord</a>.
                    </p>
                    <br />
                    <ul className="text-lg list-disc pl-12">
                        <li>
                            Direct any inquiries to <a className="text-sky-800" href="mailto:masonkpiano@outlook.com">masonkpiano@outlook.com</a>.
                        </li>
                    </ul>

                </div>

                <br />
                <div>
                    <h2 className="text-3xl font-medium">Changes to this Privacy Policy</h2>
                    <p className="text-lg">We may update our privacy policy from time to time. Any changes will be posted on this page.</p>
                    <p className="text-lg">Your use of this website implies initial acceptance of this Privacy Policy.</p>
                </div>

                <br />
                <p className="text-lg">If you have any questions or concerns, please contact us via the provided channels.</p>
                <br />
                <p className="text-lg">Thank you for visiting RO Track Laying!</p>

                <CookieSettings open={open} setOpen={setOpen}/>
            </section>
        </main>
    )
}

