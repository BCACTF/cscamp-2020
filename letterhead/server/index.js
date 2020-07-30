const Koa = require("koa");
const app = new Koa();

const message = `Hello,

We are introduced by the 
Federal Reserve Board of Trustees in Washington. We have been 
fully informed about how the staff of the fund remitting country 
has been taking advantage of you by telling you to pay 
unnecessarily exorbitant charges which will only make your fund 
payment a long drawn out process.
Due to this development, we have been assigned to step into the 
immediate processing of your fund transfer to enable your funds 
to be transferred to you within the shortest possible time. To 
implement this, you are to get back to us immediately without 
needing to pay all the huge sums of monies that are being 
demanded from you by the previous handlers at the remitting 
office.
All processes to have your funds paid to you immediately through 
the Liaison Remittance Office in New York have been initiated to 
cut out unnecessary costs.

You are advised to treat this communication with the urgency and 
seriousness required as the Board of Trustees of the Federal 
Reserve has mandated us to resolve this fund payment within the 
next three working days independent of the Remitting Offices in 
Africa. Furthermore,you are hereby advised to pay no further fees 
or charges to these offices as they shall no longer be handling 
your application. We shall await your immediate correspondence 
with your direct telephone numbers  so that we may 
conclude your payment immediately.

Yours Sincerely,
John Knowles.
John Knowles & Consults.
`;

const defaultFlag = "This problem is misconfigured. Please contact CS Camp Staff.";
if (!process.env.LH_FLAG) {
    console.error(`Missing LH_FLAG environment variable! Defaulting to "${defaultFlag}".`);
}

app.use(async ctx => {
    if (ctx.path === "/letter.txt") {
        ctx.set("X-Flag", process.env.LH_FLAG || defaultFlag);
        ctx.type = "text/plain";
        ctx.body = message;
    }
});

app.listen(process.env.LH_PORT || process.env.PORT || 1337);