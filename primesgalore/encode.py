flag = "" #redacted
m = int.from_bytes(flag.encode('ascii'), byteorder='big')
n = 144370797654491063126601829966964747832360089904341811738399337494904805277943764901985264309924496585812140018140626140909798694029986056420771653943946162895965291205122931533467307308131062830751883325715693343126868109447957190230671993824750324756210439787721565804417406256831788551424809703609190819205743422625746902711063922876280692851361459829522311476466554079385078536835646698079681405663888354914294889222730389997445901953325375798077703251943984641248226894608383390972321189791075774969306599162649123329966259620499220325652776253721936071839773902085313583509391996189236515571851898391711140736099522637772889534520252697344091985539387283864081533757598177281465295756143781288909395040426707283987604353703985521769894180358052262376257641714595312414193932575952501022086467998842445828079690928037377095793314923280683487359208293164891924254694501777064454457807566856307
e = 65537
c = pow(m, e, n)
print(c)